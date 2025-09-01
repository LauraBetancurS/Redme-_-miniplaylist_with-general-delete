# 🎵 MiniMusic App

App en **React** para buscar canciones con la **iTunes API**, mostrar resultados en tarjetas y gestionar una lista de **Liked Songs** (favoritas).

---

## 🎯 Goal
Build a React app where users can search songs, display results, and manage a list of liked songs.

---

## ✨ Features
- 🔎 Barra de búsqueda (input + botón)  
- 🌐 Fetch a iTunes API: `https://itunes.apple.com/search?term=YOUR_QUERY&entity=song&limit=12`  
- 🧩 Tarjetas por canción: **cover, title, artist** y botón **Like**  
- ❤️ Sección **Liked Songs** (añadir desde resultados)  
- 🗑️ En Liked Songs: **Delete** para remover de favoritos  
- ⏳ **Loading**, ❌ **Errores** y 🥲 **Resultados vacíos** con renderizado condicional  

---

## 🚀 Crear e inicializar un proyecto React en **Visual Studio Code**

1. Abre **VS Code** y crea/abre una carpeta para el proyecto.  
2. Abre la terminal integrada: `View > Terminal`.  
3. Ejecuta el comando para crear el proyecto con **Vite**:
   ```bash
   npm create vite@latest
Nombre del proyecto: mini-music-app

Framework: React

Variante: JavaScript

Entra en la carpeta y instala dependencias:

bash
Copiar código
cd mini-music-app
npm install
Ejecuta el proyecto:

bash
Copiar código
npm run dev
Alternativa con Create React App:

bash
Copiar código
npx create-react-app mini-music-app
cd mini-music-app
npm start
🔌 Uso de la iTunes API
Endpoint base:


'https://itunes.apple.com/search?term=YOUR_QUERY&entity=song&limit=12'


🖼️ Pasos de creación ## Paso 1
![Paso 1](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0076.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDc2LmpwZyIsImlhdCI6MTc1Njc1NzQ5OCwiZXhwIjoxNzU3MzYyMjk4fQ.ixucpCjyhjZg-jFwxgxlsL_q4dButRIEMqKEjVWdRFc)

## Paso 2
![Paso 2](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0076.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDc2LmpwZyIsImlhdCI6MTc1Njc1NzQ5OCwiZXhwIjoxNzU3MzYyMjk4fQ.ixucpCjyhjZg-jFwxgxlsL_q4dButRIEMqKEjVWdRFc)

## Paso 3
![Paso 3](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0076.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDc2LmpwZyIsImlhdCI6MTc1Njc1NzQ5OCwiZXhwIjoxNzU3MzYyMjk4fQ.ixucpCjyhjZg-jFwxgxlsL_q4dButRIEMqKEjVWdRFc)

## Paso 4
![Paso 4](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0076.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDc2LmpwZyIsImlhdCI6MTc1Njc1NzQ5OCwiZXhwIjoxNzU3MzYyMjk4fQ.ixucpCjyhjZg-jFwxgxlsL_q4dButRIEMqKEjVWdRFc)

## Paso 5
![Paso 5](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0079.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDc5LmpwZyIsImlhdCI6MTc1Njc1NzYyNSwiZXhwIjoxNzU3MzYyNDI1fQ.Mpcsgsb-5BSBK8yPgRqGhQF3g45RQgY3OKjG5fPtJT0)

## Paso 6
![Paso 6](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0080.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDgwLmpwZyIsImlhdCI6MTc1Njc1NzY0MywiZXhwIjoxNzU3MzYyNDQzfQ.d3g-fTx3A_OTpVnYMArzuBHChhyKifaQo0xLe5IBYmE)

## Paso 7
![Paso 7](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0081.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDgxLmpwZyIsImlhdCI6MTc1Njc1NzY1NCwiZXhwIjoxNzU3MzYyNDU0fQ.eRCvDdOIzZz1uZoqr8kGD6yQOhz8HuAnMu7K7V5emg4)

## Paso 8
![Paso 8](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0082.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDgyLmpwZyIsImlhdCI6MTc1Njc1NzY3NCwiZXhwIjoxNzU3MzYyNDc0fQ.XlaGT8pzyJbHYnkM_vJaekthFR7Y87hhknwJjSBIU0I)

## Paso 9
![Paso 9](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0083.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDgzLmpwZyIsImlhdCI6MTc1Njc1NzY5MCwiZXhwIjoxNzU3MzYyNDkwfQ.ipWiKqVLHDHLIxzpmvg49E0MTEV8tLVjBj1f8jDcNmw)

## Paso 10
![Paso 10](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0088.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg4LmpwZyIsImlhdCI6MTc1Njc1Nzc0MSwiZXhwIjoxNzU3MzYyNTQxfQ.N9mBadsxIKRmV9aB98ODQHdiPAQBU84du3an84IgVYk)

## Paso 11
![Paso 11](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0085.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg1LmpwZyIsImlhdCI6MTc1Njc1Nzc1NiwiZXhwIjoxNzU3MzYyNTU2fQ.Ka1tI0zSvbaot4xdrkcxDjh-5sMG_Y_nTgPyBaM7HRI)

## Paso 12
![Paso 12](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0086.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg2LmpwZyIsImlhdCI6MTc1Njc1Nzc2OSwiZXhwIjoxNzU3MzYyNTY5fQ.jYxoSuqpApS-cI-j8hb7_ZHtyFEYyqhphRrL1dc0ipU)

## Paso 13
![Paso 13](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0084.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg0LmpwZyIsImlhdCI6MTc1Njc1Nzc4NywiZXhwIjoxNzU3MzYyNTg3fQ.SdCspIXvzN9OG-40YRorJVHpaY8lKB5BVNqLHs-Gndk)

## Paso 14
![Paso 14](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0087.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg3LmpwZyIsImlhdCI6MTc1Njc1NzgwNiwiZXhwIjoxNzU3MzYyNjA2fQ.KwQorU0ExHVP8RV3P9rDgUULvBRu_RAhylVDDCiPqfU)

## Paso 15
![Paso 15](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NzgxOCwiZXhwIjoxNzU3MzYyNjE4fQ.lqboWEVk1OleJXxFwsZA0NHPnOj6NT2r9ckdQdAc9KA)

## Paso 16
![Paso 16](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0091.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDkxLmpwZyIsImlhdCI6MTc1Njc1Nzg2MiwiZXhwIjoxNzU3MzYyNjYyfQ.pua8ZfBRJfh8aMZBTexhMHTDWf7S0OtYihyuC-aPGw8)

## Paso 17
![Paso 17](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0090.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDkwLmpwZyIsImlhdCI6MTc1Njc1Nzg2OSwiZXhwIjoxNzU3MzYyNjY5fQ.2LAhbYQznHPYaSMJo2g6xW0J7prkJO5dwA5G8b4snBQ)
