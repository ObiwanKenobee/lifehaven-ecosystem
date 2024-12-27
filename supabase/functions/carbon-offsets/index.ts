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

    switch (req.method) {
      case 'GET':
        console.log('Fetching carbon offset projects...');
        const { data: projects, error: fetchError } = await supabase
          .from('conservation_programs')
          .select('*');

        if (fetchError) throw fetchError;
        return new Response(JSON.stringify(projects), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'POST':
        console.log('Creating new carbon offset project...');
        const body = await req.json();
        const { data: newProject, error: createError } = await supabase
          .from('conservation_programs')
          .insert([{
            name: body.name,
            description: body.description,
            status: body.status,
            region: body.region,
            success_metrics: body.success_metrics
          }])
          .select()
          .single();

        if (createError) throw createError;
        return new Response(JSON.stringify(newProject), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'PUT':
        console.log('Updating carbon offset project...');
        const updateBody = await req.json();
        const { data: updatedProject, error: updateError } = await supabase
          .from('conservation_programs')
          .update({
            name: updateBody.name,
            description: updateBody.description,
            status: updateBody.status,
            region: updateBody.region,
            success_metrics: updateBody.success_metrics
          })
          .eq('id', updateBody.id)
          .select()
          .single();

        if (updateError) throw updateError;
        return new Response(JSON.stringify(updatedProject), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'DELETE':
        console.log('Deleting carbon offset project...');
        const deleteBody = await req.json();
        const { error: deleteError } = await supabase
          .from('conservation_programs')
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