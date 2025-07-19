// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Elemen UI
    const mainScreen = document.getElementById('main-screen');
    const letterScreen = document.getElementById('letter-screen');
    const memoriesScreen = document.getElementById('memories-screen');
    const openLetterBtn = document.getElementById('open-letter');
    const showMemoriesBtn = document.getElementById('show-memories');
    const backToMainBtn = document.getElementById('back-to-main');
    const backToMainBtn2 = document.getElementById('back-to-main-2');
    const couplePhoto = document.getElementById('couple-photo');
    const confettiContainer = document.getElementById('confetti');
    
    // Atur foto utama (ganti dengan URL foto kalian)
    couplePhoto.src = 'https://i.postimg.cc/J0GWCjP8/Gambar-Whats-App-2025-07-19-pukul-21-54-40-5bb9b453.jpg';
    couplePhoto.alt = 'Foto kita berdua';
    
    // Event listeners
    openLetterBtn.addEventListener('click', function() {
        mainScreen.classList.add('hidden');
        letterScreen.classList.remove('hidden');
        triggerConfetti();
        playSound('https://media1.vocaroo.com/mp3/1bF9OgsxfL5y'); // Memainkan suara saat membuka surat
    });
    
    showMemoriesBtn.addEventListener('click', function() {
        mainScreen.classList.add('hidden');
        memoriesScreen.classList.remove('hidden');
        triggerConfetti();
        playSound('https://media1.vocaroo.com/mp3/1bF9OgsxfL5y'); // Memainkan suara saat menunjukkan kenangan
    });
    
    backToMainBtn.addEventListener('click', function() {
        letterScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        playSound('https://media1.vocaroo.com/mp3/1bF9OgsxfL5y'); // Memainkan suara saat kembali ke layar utama
    });
    
    backToMainBtn2.addEventListener('click', function() {
        memoriesScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        playSound('https://media1.vocaroo.com/mp3/1bF9OgsxfL5y'); // Memainkan suara saat kembali ke layar utama
    });
    
    // Fungsi confetti
    function triggerConfetti() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff6b6b', '#ff8e8e', '#ffb8b8', '#ffffff']
        });
    }
    
    // Memainkan suara
    function playSound(action) {
        const audio = new Audio(`https://media1.vocaroo.com/mp3/1bF9OgsxfL5y`); 
        // Pastikan file suara ada di folder sounds
        audio.play();
    }
    // musik mulai otomatis
        const bgMusic = document.getElementById('bgMusic');
        bgMusic.volume = 0.5; // Atur volume musik
        bgMusic.loop = true; // Musik akan berulang
        bgMusic.play().catch(playSound => {
            console.error('Ehttps://media1.vocaroo.com/mp3/1bF9OgsxfL5y:', playSound);
        }); 
    // Trigger confetti saat pertama kali dibuka
    setTimeout(triggerConfetti, 1000);
    
    // Animasi transisi saat berpindah layar
    function animateTransition(fromScreen, toScreen) {
        fromScreen.classList.add('fade-out');
        toScreen.classList.add('fade-in');
        setTimeout(() => {
            fromScreen.classList.add('hidden');
            toScreen.classList.remove('hidden');
            fromScreen.classList.remove('fade-out');
            toScreen.classList.remove('fade-in');
        }, 500); // Durasi animasi
    }
    // Setelah menampilkan kontainer
       mainScreen.classList.add('hidden');
        letterScreen.classList.remove('hidden');
        letterScreen.classList.add('visible'); 
    // Tambahkan kelas visible
        triggerConfetti();

    

});
