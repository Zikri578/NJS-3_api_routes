import React from 'react'
import connection from '../../../prisma/connection'

// membuat assigment
const dummyBlog = [
    {
        id: 1,
        judul: "ini api pertama saya",
        isi: "tetap belajar jangan pernah putus asa",
        banner: "http://picsum.photos/seed/wadasd/300/300"
    },
    {
        id: 2,
        judul: "ini api kedua saya",
        isi: "ini api kedua saya",
        banner: "http://picsum.photos/seed/asdsad/300/300"
    },
    {
        id: 3,
        judul: "ini api ketiga saya",
        isi: "ini api ketiga saya",
        banner: "http://picsum.photos/seed/kjhkhj/300/300"
    }
]

// membaca api
export default function handler(request, respons) {

    // menampilkan output di terminal
    console.info(request.query)

    // memberikan status 200 kedalam bentuk json dengan kriteria success bernilai benar
    respons.status(200).json({
        success: true,

        // mengambil variabel dummyBlog yang ada diatas
        data: dummyBlog
    })

}
