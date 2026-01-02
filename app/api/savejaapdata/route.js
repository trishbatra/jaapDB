export async function POST (req, res){
    const form = await req.formData()

    const file = form.get("jaap")

      if (!file) {
      return new Response("No file uploaded", { status: 400 });
    }


    const bytes = await file.arrayBuffer()
    const buffer  = Buffer.from(bytes)
}   