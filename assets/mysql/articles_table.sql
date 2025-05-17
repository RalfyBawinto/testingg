CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  url VARCHAR(255) NOT NULL
);


INSERT INTO articles (title, image, content, url) VALUES
('Quantum Computing', 'quantum.jpg', 'Quantum computing adalah teknologi komputasi generasi baru yang menggunakan prinsip mekanika kuantum.', 'https://id.wikipedia.org/wiki/Komputasi_kuantum'),
('Metaverse', 'metaverse.jpg', 'Metaverse menggabungkan dunia nyata dan digital dalam ruang virtual interaktif.', 'https://www.kompas.com/skola/read/2022/01/11/120000569/apa-itu-metaverse-dan-cara-kerjanya'),
('Machine Learning', 'ml.jpg', 'Machine Learning adalah cabang AI yang memungkinkan mesin belajar dari data.', 'https://www.dicoding.com/blog/mengenal-machine-learning/');
