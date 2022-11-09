import connection from "../../../prisma/connection"

// membuat api
export default async function handler(request, respons) {

    // melakukan pengecekkan jika method request bukan POST maka akan mengembalikkan respons nilai error dengan menampilkan pesan bahwa data tidak ditemukan
    if (request.method !== "POST") {
        return respons.status(404).json({
            success: false,
            message: "Data tidak ditemukan"
        })
    }

    const createBlog = await connection.blog.create({
        data: request.body
    })


    // memberikan respons status 201 dalam bentuk json dengan status bernilai true dan memberikan pesan bahwa data berhasil dimasukkan atau disimpan
    respons.status(201).json({
        success: true,
        message: "Data berhasil dimasukkan/disimpan",
        body: request.body,
        //headers: req.headers
    })
}
