import { serve } from 'https://deno.fresh.dev/std@v1/http/server.ts';
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

    switch (req.method) {
      case 'GET':
        console.log('Fetching suppliers...');
        const { data: suppliers, error: fetchError } = await supabase
          .from('suppliers')
          .select('*');

        if (fetchError) throw fetchError;
        return new Response(JSON.stringify(suppliers), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'POST':
        console.log('Creating new supplier...');
        const body = await req.json();
        const { data: newSupplier, error: createError } = await supabase
          .from('suppliers')
          .insert([{
            name: body.name,
            location: body.location,
            coordinates: body.coordinates,
            compliance_rate: body.compliance_rate,
            risk_level: body.risk_level,
            sustainability_score: body.sustainability_score
          }])
          .select()
          .single();

        if (createError) throw createError;
        return new Response(JSON.stringify(newSupplier), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'PUT':
        console.log('Updating supplier...');
        const updateBody = await req.json();
        const { data: updatedSupplier, error: updateError } = await supabase
          .from('suppliers')
          .update({
            name: updateBody.name,
            location: updateBody.location,
            coordinates: updateBody.coordinates,
            compliance_rate: updateBody.compliance_rate,
            risk_level: updateBody.risk_level,
            sustainability_score: updateBody.sustainability_score
          })
          .eq('id', updateBody.id)
          .select()
          .single();

        if (updateError) throw updateError;
        return new Response(JSON.stringify(updatedSupplier), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'DELETE':
        console.log('Deleting supplier...');
        const deleteBody = await req.json();
        const { error: deleteError } = await supabase
          .from('suppliers')
          .delete()
          .eq('id', deleteBody.id);

        if (deleteError) throw deleteError;
        return new Response(JSON.stringify({ success: true }), {
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