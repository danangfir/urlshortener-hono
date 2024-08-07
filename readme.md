#### URL Shortener adalah aplikasi web yang memungkinkan pengguna untuk mempersingkat URL panjang menjadi URL pendek yang mudah dibagikan
#### Aplikasi ini terdiri dari backend yang dibangun menggunakan Bun sebagai runtime JavaScript dengan framework Hono untuk routing dan SQLite sebagai database untuk menyimpan URL 
#### Bagian frontend dibangun menggunakan Svelte dengan TypeScript untuk memberikan antarmuka pengguna yang responsif dan interaktif
#### Backend menerima permintaan POST untuk mempersingkat URL dan GET untuk mengalihkan URL pendek ke URL panjang aslinya, sementara frontend menyediakan form untuk memasukkan URL panjang dan menampilkan URL pendek yang dihasilkan
#### Teknologi tambahan yang digunakan termasuk Rollup untuk bundling frontend, dan live-server untuk menyajikan file statis selama pengembangan

buat jalanin server:
> cd server

perintah terminal `bun start`

buat jalanin frontend:
> cd client

perintah terminal `live-server public`

Output:
![gambar output](/images/pa.png)

