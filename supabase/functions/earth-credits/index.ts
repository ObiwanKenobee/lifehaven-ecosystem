import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');

    switch (req.method) {
      case 'GET':
        console.log('Fetching earth credits data...');
        const { data: metrics, error: metricsError } = await supabase
          .from('analytics_metrics')
          .select('*')
          .eq('category', 'earth_credits');

        if (metricsError) throw metricsError;
        return new Response(JSON.stringify(metrics), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'POST':
        console.log('Creating new earth credits entry...');
        const body = await req.json();
        const { data: newMetric, error: insertError } = await supabase
          .from('analytics_metrics')
          .insert([{
            metric_name: body.metric_name,
            metric_value: body.metric_value,
            category: 'earth_credits',
            dimensions: body.dimensions
          }])
          .select()
          .single();

        if (insertError) throw insertError;
        return new Response(JSON.stringify(newMetric), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      default:
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
  } catch (error) {
    console.error('Error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});