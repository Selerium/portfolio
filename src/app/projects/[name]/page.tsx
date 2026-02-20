import { supabase } from "@/stores/supabase";

export default async function ProjectPage({ params }: { params: {
    name: string,
}} ) {
    const { name } = await params;
    const { data: projectInfo } = await supabase.from('projects').select('*');
    return (
        <div>

        </div>
    )
}