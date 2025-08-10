'use server';

import { createClient } from '@/utils/supabase/server';

export async function saveVersion(json: [string, string][]) {
  const supabase = await createClient();
  await supabase.from('versions').insert({ content: json });
}

export async function fetchLatestVersion() {
  const supabase = await createClient();

  const { data } = await supabase
    .from('versions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
  
  return data![0]["content"] as [string, string][];
}

export async function fetchAllVersions() {
  const supabase = await createClient();

  const { data } = await supabase
    .from('versions')
    .select('id, created_at')
    .order('created_at', { ascending: false })

  return data!;
}

export async function fetchSpecificVersion(id: string) {
  const supabase = await createClient();

  const { data } = await supabase
    .from('versions')
    .select('*')
    .eq('id', id)
    .single();
  
  return data["content"] as [string, string][];
}
