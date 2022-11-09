import React from 'react'
import styles from "../styles/Home.module.css"

export default function Dashboard() {

    // untuk handler submit
    const handleSubmit = (event) => {

        // stop reload page
        event.preventDefault()

        const judul = event.target.judul.value;
        const isi = event.target.isi.value;

        fetch('http://localhost:3000/api/blog/create', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ judul, isi })
        })
            .then(res => res.json())
            .then(data => { console.info(data) })
            .catch(err => { console.error(err) })
    }

    return (
        <div className={styles.main}>
            <form action="" className={styles.form} autoComplete='off' onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="judul">Judul</label>
                    <input type="text" id='judul' required placeholder='Masukkan Judul' />
                </div>

                <div>
                    <label htmlFor="isi">Deskripsi</label>
                    <textarea type="text" id='isi' required placeholder='Masukkan Isi Deskripsi' />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
