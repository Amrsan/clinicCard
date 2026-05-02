import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const envFile = fs.readFileSync('.env.local', 'utf-8')
const supabaseUrl = envFile.match(/VITE_SUPABASE_URL=(.*)/)[1]
const supabaseKey = envFile.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1]

const supabase = createClient(supabaseUrl, supabaseKey)

async function run() {
  const { data, error } = await supabase
    .from("service_providers")
    .select(`*, provider_locations(*, provider_locations_opening_hours(*))`)
    .limit(1)
  
  if (error) {
    console.log("ERROR:", error.message)
  } else {
    console.log("SUCCESS:", JSON.stringify(data, null, 2))
  }
}

run()
