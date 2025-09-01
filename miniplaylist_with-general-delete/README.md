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
![Paso 1](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0075.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDc1LmpwZyIsImlhdCI6MTc1Njc1NjE2OCwiZXhwIjoxNzU3MzYwOTY4fQ.zgy3NJsN0X93RCKj5yEEbVSpei1LDOIv-w_XZSrKX28)

## Paso 2
![Paso 2](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0076.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDc2LmpwZyIsImlhdCI6MTc1Njc1NjE4MiwiZXhwIjoxNzU3MzYwOTgyfQ.4yuc5qwXYWK1vJEIfr-N2iDe51aYZfIC8k2HQqXnSI4)

## Paso 3
![Paso 3](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NjMzMSwiZXhwIjoxNzU3MzYxMTMxfQ.xfkc9cqYqCIMpz8Pm8Qazdg3zQYSjm9jOHvbZi9Oe0E)

## Paso 4
![Paso 4](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NjMzMSwiZXhwIjoxNzU3MzYxMTMxfQ.xfkc9cqYqCIMpz8Pm8Qazdg3zQYSjm9jOHvbZi9Oe0E)

## Paso 5
![Paso 5](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NjMzMSwiZXhwIjoxNzU3MzYxMTMxfQ.xfkc9cqYqCIMpz8Pm8Qazdg3zQYSjm9jOHvbZi9Oe0E)

## Paso 6
![Paso 6](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NjMzMSwiZXhwIjoxNzU3MzYxMTMxfQ.xfkc9cqYqCIMpz8Pm8Qazdg3zQYSjm9jOHvbZi9Oe0E)

## Paso 7
![Paso 7](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NjMzMSwiZXhwIjoxNzU3MzYxMTMxfQ.xfkc9cqYqCIMpz8Pm8Qazdg3zQYSjm9jOHvbZi9Oe0E)

## Paso 8
![Paso 8](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NjMzMSwiZXhwIjoxNzU3MzYxMTMxfQ.xfkc9cqYqCIMpz8Pm8Qazdg3zQYSjm9jOHvbZi9Oe0E)

## Paso 9
![Paso 9](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0083.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDgzLmpwZyIsImlhdCI6MTc1Njc1NjYyMSwiZXhwIjoxNzU3MzYxNDIxfQ.poygqWFTlkm0w9vH3yWJjVD3O6HUs3sDuyyiY8EkBwQ)

## Paso 10
![Paso 10](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0084.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg0LmpwZyIsImlhdCI6MTc1Njc1NjYzMSwiZXhwIjoxNzU3MzYxNDMxfQ.oLTqr6prNukV_5znRoDexnngfcxje3T8ZUxE357zhcc)

## Paso 11
![Paso 11](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0085.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg1LmpwZyIsImlhdCI6MTc1Njc1NjY0MCwiZXhwIjoxNzU3MzYxNDQwfQ.pDfu9Qbq89Qs9UkaQDJ0eZpETm0FBt-hLtySSXiuDSY)

## Paso 12
![Paso 12](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0086.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg2LmpwZyIsImlhdCI6MTc1Njc1NjY0OSwiZXhwIjoxNzU3MzYxNDQ5fQ.vabGegGCMgONEMtgxdAtgIf6amI4TDQcE922Qz-My6s)

## Paso 13
![Paso 13](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0087.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg3LmpwZyIsImlhdCI6MTc1Njc1NjY1NywiZXhwIjoxNzU3MzYxNDU3fQ.JffIz_qM-of3A1Z-3hdZOhQWgZhDGae4O9mdzYdngl4)

## Paso 14
![Paso 14](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0088.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg4LmpwZyIsImlhdCI6MTc1Njc1NjY2NSwiZXhwIjoxNzU3MzYxNDY1fQ.5Sc1qllEVy7FGRa1cW43Lyce8CiGsI9OjmzqUinVRNA)

## Paso 15
![Paso 15](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0089.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDg5LmpwZyIsImlhdCI6MTc1Njc1NjY3MiwiZXhwIjoxNzU3MzYxNDcyfQ.9qzIMSswdkRhKzjniNkNZQobQRn0QfSt0AsSq6S9fKw)

## Paso 16
![Paso 16](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0090.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDkwLmpwZyIsImlhdCI6MTc1Njc1NjY3OSwiZXhwIjoxNzU3MzYxNDc5fQ.X4T05w_HR1QzO4CkDVGhwYUeEl63JO5vQQ4mWNWMPX0)

## Paso 17
![Paso 17](https://wxegdtvbnrjthkelfxhs.supabase.co/storage/v1/object/sign/music/IMG-20250901-WA0091.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yN2I3YTQ4ZC1jOWYzLTQ2YmMtOWUxYS1kMGJkZTkxYmE3OTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtdXNpYy9JTUctMjAyNTA5MDEtV0EwMDkxLmpwZyIsImlhdCI6MTc1Njc1NjY4NiwiZXhwIjoxNzU3MzYxNDg2fQ.FvC9FiaNfZW6TwpN9CzjHCv0WiaZa3BMsGeBKlOjgOw)
