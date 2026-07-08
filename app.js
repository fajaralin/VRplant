document.addEventListener('DOMContentLoaded', () => {
    // --- Data Definitions ---
    // --- Data Definitions ---
    const PROJECTS = {
        panca_indera: {
            id: "panca_indera",
            brandTitle: "Panca Indera",
            title: "Panca Indera Manusia",
            shareUrl: "https://assemblr.edu/project/panca-indera",
            quizTitle: "Kuis Evaluasi Panca Indera",
            quizIntro: "Evaluasi pemahamanmu tentang lima indera manusia beserta fungsinya. Kuis ini terdiri dari 5 pertanyaan pilihan ganda interaktif.",
            certTopic: "PANCA INDERA & FUNGSINYA",
            defaultCameraPos: new THREE.Vector3(0, 0.2, 4.5),
            defaultCameraLookAt: new THREE.Vector3(0, -0.8, 0),
            hotspotCoords: {
                mata: new THREE.Vector3(0, 0.35, 0.8),
                telinga: new THREE.Vector3(-0.8, 0.25, 0),
                hidung: new THREE.Vector3(0, 0.1, 0.85),
                lidah: new THREE.Vector3(0, -0.2, 0.75),
                kulit: new THREE.Vector3(0.76, -1.84, 0.05)
            },
            senses: {
                mata: {
                    title: "Mata",
                    prefix: "Indera Penglihat",
                    icon: "👁️",
                    color: "var(--color-mata)",
                    function: "Melihat objek, cahaya, dan warna di sekitar kita.",
                    description: "Mata menangkap pantulan cahaya dari benda di sekitar kita, kemudian mengirimkan sinyal tersebut ke otak untuk diterjemahkan menjadi gambar yang kita lihat. Bagian penting mata meliputi pupil, iris, lensa, dan retina.",
                    voiceText: "Mata adalah indera penglihat. Fungsinya untuk melihat objek, cahaya, dan warna di sekitar kita.",
                    camPos: { x: 0, y: 0.35, z: 1.7 },
                    camTarget: { x: 0, y: 0.35, z: 0.8 }
                },
                telinga: {
                    title: "Telinga",
                    prefix: "Indera Pendengar",
                    icon: "👂",
                    color: "var(--color-telinga)",
                    function: "Mendengar bunyi, suara, dan menjaga keseimbangan tubuh.",
                    description: "Telinga menangkap gelombang suara di udara. Getaran suara masuk ke saluran telinga, menggetarkan gendang telinga, diteruskan ke rumah siput (koklea), lalu dikirim ke otak sebagai suara. Telinga juga membantu kita menjaga keseimbangan tubuh.",
                    voiceText: "Telinga adalah indera pendengar. Fungsinya untuk mendengar bunyi dan suara di sekitar kita.",
                    camPos: { x: -1.7, y: 0.25, z: 0.6 },
                    camTarget: { x: -0.6, y: 0.25, z: 0 }
                },
                hidung: {
                    title: "Hidung",
                    prefix: "Indera Penciuman",
                    icon: "👃",
                    color: "var(--color-hidung)",
                    function: "Mencium berbagai bebauan dan membantu pernapasan.",
                    description: "Hidung mendeteksi partikel aroma kimia di udara melalui sel saraf penciuman (olfaktori). Sinyal aroma tersebut dikirim ke otak sehingga kita bisa membedakan bau wangi bunga, makanan lezat, maupun bau tidak sedap.",
                    voiceText: "Hidung adalah indera penciuman. Fungsinya untuk mencium berbagai bebauan di sekitar kita.",
                    camPos: { x: 0, y: 0.1, z: 1.6 },
                    camTarget: { x: 0, y: 0.1, z: 0.95 }
                },
                lidah: {
                    title: "Lidah",
                    prefix: "Indera Pengecap",
                    icon: "👅",
                    color: "var(--color-lidah)",
                    function: "Mengecap rasa makanan (manis, asin, asam, pahit, gurih).",
                    description: "Permukaan lidah dilapisi bintil kecil bernama papila yang memiliki kuncup pengecap. Ketika makanan larut dengan air liur, saraf pengecap mendeteksi rasa manis, asin, asam, pahit, dan gurih, lalu mengirimkannya ke otak.",
                    voiceText: "Lidah adalah indera pengecap. Fungsinya untuk mengecap rasa manis, asin, asam, pahit, dan gurih pada makanan.",
                    camPos: { x: 0, y: -0.2, z: 1.5 },
                    camTarget: { x: 0, y: -0.2, z: 0.75 }
                },
                kulit: {
                    title: "Kulit",
                    prefix: "Indera Peraba",
                    icon: "🖐️",
                    color: "var(--color-kulit)",
                    function: "Merasakan sentuhan, suhu (panas/dingin), tekstur, dan rasa sakit.",
                    description: "Kulit adalah organ terbesar tubuh yang memiliki jutaan ujung saraf sensorik. Saraf-saraf ini peka terhadap tekanan (kasar/halus), suhu (panas/dingin), getaran, dan rasa sakit, sehingga kita bisa berinteraksi dengan aman.",
                    voiceText: "Kulit adalah indera peraba. Fungsinya untuk merasakan sentuhan, suhu panas dan dingin, serta tekstur benda.",
                    camPos: { x: 1.8, y: -2.06, z: 1.2 },
                    camTarget: { x: 0.95, y: -2.06, z: 0.1 }
                }
            },
            quizQuestions: [
                {
                    question: "Manakah dari panca indera berikut yang berfungsi untuk mendeteksi gelombang suara?",
                    options: ["Mata", "Hidung", "Telinga", "Kulit"],
                    answer: 2,
                    feedback: "Benar! Telinga adalah indera pendengar yang bertugas menangkap gelombang suara di sekitar kita."
                },
                {
                    question: "Ketika kamu mencium bau masakan ibu yang sangat wangi, indera apa yang sedang bekerja?",
                    options: ["Indera Pengecap", "Indera Penciuman (Hidung)", "Indera Penglihat", "Indera Peraba"],
                    answer: 1,
                    feedback: "Tepat sekali! Sel penciuman di dalam hidung mendeteksi partikel aroma makanan di udara."
                },
                {
                    question: "Bagian permukaan lidah yang berfungsi sebagai penerima rangsangan rasa makanan disebut...",
                    options: ["Retina", "Pupil", "Papila (Kuncup Pengecap)", "Gendang Telinga"],
                    answer: 2,
                    feedback: "Benar! Papila mengandung kuncup pengecap yang sensitif terhadap rasa manis, asin, asam, pahit, dan gurih."
                },
                {
                    question: "Mengapa kulit kita dapat membedakan permukaan benda yang kasar dan halus?",
                    options: [
                        "Karena kulit memiliki kuncup pengecap rasa",
                        "Karena kulit memiliki jutaan ujung saraf sensorik peraba",
                        "Karena kulit memancarkan sinar inframerah",
                        "Karena kulit peka terhadap gelombang suara"
                    ],
                    answer: 1,
                    feedback: "Benar! Ujung saraf sensorik pada kulit mendeteksi tekanan, gesekan, dan tekstur suatu benda."
                },
                {
                    question: "Fungsi utama dari mata adalah...",
                    options: [
                        "Mendengar penjelasan guru",
                        "Mencium bebauan lingkungan sekitar",
                        "Melihat objek, bentuk, warna, dan menangkap cahaya",
                        "Mengecap rasa asam pada buah jeruk"
                    ],
                    answer: 2,
                    feedback: "Luar biasa! Mata menangkap pantulan cahaya untuk memberikan indera penglihatan visual kepada kita."
                }
            ],
            timelineSteps: [
                { step: "1", title: "Menentukan Materi Pembelajaran", desc: "Materi difokuskan pada Panca Indera dengan tujuan agar siswa mengenal lima indera (mata, telinga, hidung, lidah, kulit) beserta fungsinya masing-masing." },
                { step: "2", title: "Login ke Assemblr EDU", desc: "Buka aplikasi atau situs web Assemblr EDU, lakukan login atau registrasi menggunakan akun Google Anda." },
                { step: "3", title: "Membuat Proyek Baru", desc: "Pilih menu <strong>Create Project</strong> untuk membuat kanvas 3D kosong baru, lalu beri judul proyek Anda: <strong>“Panca Indera”</strong>." },
                { step: "4", title: "Menambahkan Objek 3D Manusia", desc: "Masuk ke menu <strong>Library</strong>, cari dan tambahkan objek 3D wajah atau seluruh tubuh manusia ke dalam area kerja." },
                { step: "5 & 6", title: "Memberikan Label & Keterangan", desc: "Berikan label teks 3D pada setiap indera (mata, telinga, hidung, lidah, kulit) lengkap dengan deskripsi singkat fungsinya." },
                { step: "7", title: "Menambahkan Hotspot Interaktif", desc: "Tambahkan hotspot pada setiap indera sehingga ketika disentuh/diklik oleh siswa, informasi detail serta suara penjelasan akan muncul." },
                { step: "8", title: "Menguji AR Preview", desc: "Gunakan fitur <strong>AR Preview</strong> di pojok kanan layar. Pindai kode QR proyek menggunakan smartphone untuk melihat model 3D menyatu dengan dunia nyata." },
                { step: "9 & 10", title: "Menyimpan & Membagikan", desc: "Simpan proyek Anda. Bagikan kode QR atau tautan kepada siswa. Minta siswa memindai QR, mengamati model 3D, dan mengerjakan kuis evaluasi." }
            ]
        },
        bagian_tumbuhan: {
            id: "bagian_tumbuhan",
            brandTitle: "Bagian Tumbuhan",
            title: "Struktur Tanaman Tomat",
            shareUrl: "https://assemblr.edu/project/struktur-tanaman-tomat",
            quizTitle: "Kuis Evaluasi Bagian Tumbuhan",
            quizIntro: "Evaluasi pemahamanmu tentang struktur tanaman tomat beserta fungsinya masing-masing. Kuis ini terdiri dari 5 pertanyaan pilihan ganda interaktif.",
            certTopic: "BAGIAN TUMBUHAN & FUNGSINYA",
            defaultCameraPos: new THREE.Vector3(0, 0.2, 5.0),
            defaultCameraLookAt: new THREE.Vector3(0, -0.4, 0),
            hotspotCoords: {
                bunga: new THREE.Vector3(0.1, 1.1, 0.15),
                buah: new THREE.Vector3(0.25, 0.2, 0.25),
                daun: new THREE.Vector3(-0.45, 0.5, 0.1),
                batang: new THREE.Vector3(0, -0.1, 0),
                akar: new THREE.Vector3(0, -1.8, 0)
            },
            senses: {
                bunga: {
                    title: "Bunga",
                    prefix: "Organ Perkembangbiakan",
                    icon: "🌼",
                    color: "var(--color-bunga)",
                    function: "Alat perkembangbiakan tanaman dan cikal bakal buah.",
                    description: "Bunga tomat berwarna kuning cerah. Fungsinya adalah sebagai alat penyerbukan dan perkembangbiakan tanaman, yang nantinya akan berkembang menjadi buah tomat.",
                    voiceText: "Bunga adalah organ perkembangbiakan. Fungsinya sebagai alat penyerbukan dan cikal bakal buah tomat.",
                    camPos: { x: 0, y: 1.5, z: 1.25 },
                    camTarget: { x: 0.1, y: 1.1, z: 0.15 }
                },
                buah: {
                    title: "Buah",
                    prefix: "Organ Penyimpan Cadangan",
                    icon: "🍅",
                    color: "var(--color-buah)",
                    function: "Melindungi biji tanaman tomat dan sebagai cadangan makanan.",
                    description: "Buah tomat yang matang berwarna merah segar dan memiliki kandungan vitamin yang kaya. Buah berfungsi untuk membungkus serta melindungi biji tomat agar tanaman dapat terus berkembang biak.",
                    voiceText: "Buah berfungsi melindungi biji tanaman tomat dan sebagai tempat penyimpanan cadangan makanan.",
                    camPos: { x: 0.6, y: 0.3, z: 1.2 },
                    camTarget: { x: 0.25, y: 0.2, z: 0.25 }
                },
                daun: {
                    title: "Daun",
                    prefix: "Organ Fotosintesis",
                    icon: "🍃",
                    color: "var(--color-daun)",
                    function: "Tempat fotosintesis (pembuatan makanan) dan pernapasan.",
                    description: "Daun tomat berwarna hijau berkat klorofil. Di dalam daun terjadi proses fotosintesis dengan bantuan sinar matahari untuk memproduksi nutrisi bagi pertumbuhan seluruh bagian tanaman.",
                    voiceText: "Daun berfungsi sebagai tempat fotosintesis atau proses pembuatan makanan bagi tanaman dengan bantuan sinar matahari.",
                    camPos: { x: -0.9, y: 0.7, z: 1.1 },
                    camTarget: { x: -0.45, y: 0.5, z: 0.1 }
                },
                batang: {
                    title: "Batang",
                    prefix: "Organ Penopang & Pengangkut",
                    icon: "🌿",
                    color: "var(--color-batang)",
                    function: "Menopang tanaman dan menyalurkan air serta zat hara.",
                    description: "Batang tanaman tomat tumbuh tegak berdiri untuk menopang cabang, daun, buah, dan bunga. Batang juga mengalirkan air dan mineral dari akar ke daun, serta menyebarkan hasil fotosintesis ke seluruh tumbuhan.",
                    voiceText: "Batang berfungsi untuk menegakkan tanaman, serta menyalurkan air dan mineral dari akar menuju ke daun.",
                    camPos: { x: 0.8, y: 0.2, z: 1.8 },
                    camTarget: { x: 0, y: -0.1, z: 0 }
                },
                akar: {
                    title: "Akar",
                    prefix: "Organ Penyerap Air",
                    icon: "🪵",
                    color: "var(--color-akar)",
                    function: "Menyerap air, zat hara, serta memperkokoh tanaman di tanah.",
                    description: "Akar tomat tumbuh bercabang-cabang di bawah tanah. Akar berfungsi menyerap air, garam mineral, dan zat hara dari dalam tanah untuk kebutuhan tanaman, sekaligus menjaga tanaman agar tidak mudah roboh tertiup angin.",
                    voiceText: "Akar berfungsi menyerap air dan zat hara dari dalam tanah, serta memperkokoh tegaknya tanaman tomat.",
                    camPos: { x: 0, y: -1.3, z: 1.8 },
                    camTarget: { x: 0, y: -1.8, z: 0 }
                }
            },
            quizQuestions: [
                {
                    question: "Bagian manakah pada tanaman tomat yang berfungsi sebagai alat perkembangbiakan dan penyerbukan?",
                    options: ["Akar", "Daun", "Batang", "Bunga"],
                    answer: 3,
                    feedback: "Benar! Bunga adalah organ perkembangbiakan yang akan berkembang menjadi buah setelah proses penyerbukan."
                },
                {
                    question: "Apa fungsi utama dari akar pada tanaman tomat?",
                    options: ["Membuat makanan melalui fotosintesis", "Menyerap air dan zat hara dari tanah", "Menghasilkan biji untuk berkembang biak", "Menyebarkan oksigen ke seluruh tanaman"],
                    answer: 1,
                    feedback: "Tepat sekali! Akar menyerap air dan mineral hara dari tanah untuk didistribusikan ke bagian tanaman lainnya."
                },
                {
                    question: "Proses pembuatan makanan pada daun tanaman tomat dengan bantuan sinar matahari disebut...",
                    options: ["Fotosintesis", "Transpirasi", "Penyerbukan", "Respirasi"],
                    answer: 0,
                    feedback: "Benar! Fotosintesis terjadi di klorofil daun menggunakan energi cahaya matahari."
                },
                {
                    question: "Bagian tanaman tomat yang membungkus dan melindungi biji di dalamnya adalah...",
                    options: ["Akar", "Batang", "Buah", "Bunga"],
                    answer: 2,
                    feedback: "Tepat! Buah tomat membungkus biji untuk melindunginya agar tanaman baru dapat tumbuh."
                },
                {
                    question: "Fungsi batang tanaman tomat yang utama adalah...",
                    options: ["Menyerap air di dalam tanah", "Menopang cabang/daun serta menyalurkan zat hara", "Melindungi biji tanaman", "Menarik perhatian serangga penyerbuk"],
                    answer: 1,
                    feedback: "Benar! Batang menopang struktur atas tanaman tomat dan mengalirkan nutrisi ke seluruh bagian tumbuhan."
                }
            ],
            timelineSteps: [
                { step: "1", title: "Menentukan Materi Pembelajaran", desc: "Materi difokuskan pada Bagian Tumbuhan dengan tujuan agar siswa mengenal lima organ utama (bunga, buah, daun, batang, akar) tanaman tomat beserta fungsinya masing-masing." },
                { step: "2", title: "Login ke Assemblr EDU", desc: "Buka aplikasi atau situs web Assemblr EDU, lakukan login atau registrasi menggunakan akun Google Anda." },
                { step: "3", title: "Membuat Proyek Baru", desc: "Pilih menu <strong>Create Project</strong> untuk membuat kanvas 3D kosong baru, lalu beri judul proyek Anda: <strong>“Struktur Tanaman Tomat”</strong>." },
                { step: "4", title: "Menambahkan Objek 3D Tanaman", desc: "Masuk ke menu <strong>Library</strong>, cari dan tambahkan objek 3D wajah atau seluruh struktur tumbuhan tanaman tomat ke dalam area kerja." },
                { step: "5 & 6", title: "Memberikan Label & Keterangan", desc: "Berikan label teks 3D pada setiap bagian utama (bunga, buah, daun, batang, akar) lengkap dengan deskripsi singkat fungsinya." },
                { step: "7", title: "Menambahkan Hotspot Interaktif", desc: "Tambahkan hotspot pada setiap bagian tumbuhan sehingga ketika disentuh/diklik oleh siswa, informasi detail serta suara penjelasan akan muncul." },
                { step: "8", title: "Menguji AR Preview", desc: "Gunakan fitur <strong>AR Preview</strong> di pojok kanan layar. Pindai kode QR proyek menggunakan smartphone untuk melihat model 3D tanaman tomat menyatu dengan dunia nyata." },
                { step: "9 & 10", title: "Menyimpan & Membagikan", desc: "Simpan proyek Anda. Bagikan kode QR atau tautan kepada siswa. Minta siswa memindai QR, mengamati model 3D bagian tumbuhan, dan mengerjakan kuis evaluasi." }
            ]
        }
    };

    let currentProject = PROJECTS.bagian_tumbuhan;

    // --- State Variables ---
    let currentTab = 'learning';
    let activeSense = null;
    let speechSynth = window.speechSynthesis;
    let currentUtterance = null;
    let isSpeaking = false;
    
    // Camera / Video state for AR Mode
    let arStream = null;
    let arCameraActive = false;

    // Quiz state
    let quizCurrentQuestion = 0;
    let quizScore = 0;
    let quizSelectedAnswer = null;

    // Three.js instances for Learning Canvas
    let scene, camera, renderer, controls;
    let headModel;
    let mixer, clock, headBone, handBone;
    let isTransitioning = false;
    let targetCameraPos = new THREE.Vector3(0, 0.2, 5.0);
    let targetCameraLookAt = new THREE.Vector3(0, -0.4, 0);
    const defaultCameraPos = new THREE.Vector3(0, 0.2, 5.0);
    const defaultCameraLookAt = new THREE.Vector3(0, -0.4, 0);

    // Three.js instances for AR Canvas
    let arScene, arCamera, arRenderer, arModel;
    let arModelScale = 1.0;
    let arModelRotationY = 0;

    // --- DOM Elements ---
    const navItems = document.querySelectorAll('.nav-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Learning UI
    const detailsEmpty = document.getElementById('details-empty');
    const detailsContent = document.getElementById('details-content');
    const infoTitle = document.getElementById('info-title');
    const infoPrefix = document.querySelector('.info-label-prefix');
    const infoIconContainer = document.getElementById('info-icon-container');
    const infoFunction = document.getElementById('info-function');
    const infoDescription = document.getElementById('info-description');
    const btnPlaySound = document.getElementById('btn-play-sound');
    
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnResetCam = document.getElementById('btn-reset-cam');
    const btnExportGlb = document.getElementById('btn-export-glb');
    
    const hotspotLabels = document.querySelectorAll('.hotspot-label');
    const quickBtns = document.querySelectorAll('.quick-btn');

    // AR Preview UI
    const btnArTrigger = document.getElementById('btn-ar-trigger');
    const btnArTriggerHUD = document.getElementById('btn-ar-trigger');
    const btnArClose = document.getElementById('btn-ar-close');
    const btnRequestCamera = document.getElementById('btn-request-camera');
    const arPermissionScreen = document.getElementById('ar-permission-screen');
    const arVideo = document.getElementById('ar-video');
    const arCanvas = document.getElementById('ar-canvas');
    const btnArScaleUp = document.getElementById('btn-ar-scale-up');
    const btnArScaleDown = document.getElementById('btn-ar-scale-down');
    const btnArRotateY = document.getElementById('btn-ar-rotate-y');

    // Sharing Dialog
    const btnShare = document.getElementById('btn-share');
    const shareModal = document.getElementById('share-modal');
    const btnCloseShare = document.getElementById('btn-close-share');
    const shareUrlInput = document.getElementById('share-url');
    const btnCopyUrl = document.getElementById('btn-copy-url');
    const qrCodeImg = document.getElementById('qr-code-img');

    // Quiz UI
    const quizStart = document.getElementById('quiz-start');
    const quizPlayground = document.getElementById('quiz-playground');
    const quizResult = document.getElementById('quiz-result');
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    const quizQuestionIndex = document.getElementById('quiz-question-index');
    const quizScoreDisplay = document.getElementById('quiz-score-display');
    const quizQuestionText = document.getElementById('quiz-question-text');
    const quizOptionsContainer = document.getElementById('quiz-options-container');
    const quizFeedbackBox = document.getElementById('quiz-feedback-box');
    const quizFeedbackIcon = document.getElementById('quiz-feedback-icon');
    const quizFeedbackText = document.getElementById('quiz-feedback-text');
    const btnQuizNext = document.getElementById('btn-quiz-next');
    const quizProgress = document.getElementById('quiz-progress');
    const resultEmoji = document.getElementById('result-emoji');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const resultScore = document.getElementById('result-score');
    const certificateBox = document.getElementById('certificate-box');
    const btnRestartQuiz = document.getElementById('btn-restart-quiz');
    const btnCertDownload = document.getElementById('btn-cert-download');

    // --- Tab Navigation Setup ---
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    function switchTab(tabName) {
        if (tabName === currentTab) return;

        // Stop TTS
        stopVoiceExplanation();

        // Update Nav Menu UI
        navItems.forEach(nav => nav.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
        if (activeNav) activeNav.classList.add('active');

        // Update Tab Panes
        tabPanes.forEach(pane => pane.classList.remove('active'));
        const activePane = document.getElementById(`tab-${tabName}`);
        if (activePane) activePane.classList.add('active');

        currentTab = tabName;

        // Handle specific tab initializations
        if (tabName === 'learning') {
            triggerResize();
        } else if (tabName === 'ar-preview') {
            // Do not auto-trigger camera, show permission screen first
            if (arStream) {
                arPermissionScreen.classList.add('hidden');
                startARCameraRendering();
            } else {
                arPermissionScreen.classList.remove('hidden');
            }
        } else {
            // Leaving AR Mode: stop streams
            stopARCamera();
        }
    }

    function triggerResize() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }

    // --- Toast Helper ---
    function showToast(message, type = 'success') {
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = '✅';
        if (type === 'danger') icon = '❌';
        
        toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.4s ease';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    }

    // --- Three.js Creator Logic (Learning Scene) ---
    function initLearning3D() {
        const container = document.getElementById('threejs-container');
        if (!container) return;

        // Scene
        scene = new THREE.Scene();

        // Camera
        camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.copy(defaultCameraPos);

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // Controls
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2 + 0.1; // Limit panning down
        controls.minDistance = 1.0;
        controls.maxDistance = 6.0;
        controls.target.copy(defaultCameraLookAt);

        // Auto-rotation parameters for OrbitControls
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6; // slow, elegant rotation to prevent static look

        // Pause autoRotate and transition when user starts dragging
        controls.addEventListener('start', () => {
            isTransitioning = false;
            controls.autoRotate = false;
        });

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Directional Light (Main frontal)
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
        dirLight.position.set(2, 4, 5);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        scene.add(dirLight);

        // Colored Rim Light (Back glow for premium aesthetics)
        const rimLight = new THREE.DirectionalLight(0x818cf8, 0.7);
        rimLight.position.set(-4, 2, -3);
        scene.add(rimLight);

        // Ground Grid Helper for context (adjusted for full-body model standing height)
        const gridHelper = new THREE.GridHelper(10, 10, 0x4f46e5, 0x1f2937);
        gridHelper.position.y = -2.97;
        scene.add(gridHelper);

        // Setup clock for animation mixer
        clock = new THREE.Clock();

        // Model loading is handled by loadProject() after initLearning3D completes
        // (Do NOT call loadFBXModel here — currentProject may not be set yet)

        // Resize handler
        window.addEventListener('resize', onWindowResize);

        // Start render loop
        animate();
    }

    // --- Model Loader UI Helpers ---
    function showLoader() {
        const loader = document.getElementById('model-loader');
        if (loader) loader.classList.remove('hidden');
    }

    function hideLoader() {
        const loader = document.getElementById('model-loader');
        if (loader) loader.classList.add('hidden');
    }

    function updateLoaderText(text) {
        const loaderText = document.getElementById('loader-text');
        if (loaderText) loaderText.textContent = text;
    }

    // --- FBX Model Loading and Fallback Setup ---
    function loadFBXModel() {
        // Revert to original chibi model as requested by user
        hideLoader();
        setupFallbackModel();
    }

    function setupFBXModel(fbx) {
        // Create an outer wrapper group to protect transformations from AnimationMixer overrides
        const wrapper = new THREE.Group();
        wrapper.add(fbx);

        // Calculate the bounding box of the original raw FBX model inside the wrapper
        const tempBox = new THREE.Box3().setFromObject(fbx);
        const size = new THREE.Vector3();
        tempBox.getSize(size);
        console.log("Original FBX Dimensions -> Width (x):", size.x, "Height (y):", size.y, "Depth (z):", size.z);

        // Auto-scale based on height (we want the character to be ~1.8 units tall in the scene)
        const rawHeight = Math.max(size.y, size.z);
        const scaleFactor = 1.8 / rawHeight;
        wrapper.scale.set(scaleFactor, scaleFactor, scaleFactor);
        console.log("Auto-calibrated Scale Factor applied to wrapper:", scaleFactor);

        // Auto-rotate the wrapper group if the character model is lying down
        // Renderpeople models modeled in Z-up system lie flat on the floor (depth z > height y)
        if (size.z > size.y) {
            console.log("Detecting Z-up model (lying down). Auto-rotating wrapper 90 deg around X-axis to stand upright.");
            wrapper.rotation.x = -Math.PI / 2;
        }

        // Apply scale/rotation to find the bounding box min.y of the wrapper in scene space
        const sceneBox = new THREE.Box3().setFromObject(wrapper);
        const minY = sceneBox.min.y;
        
        // Position the wrapper horizontally centered, with feet aligned exactly on the grid helper (y = -1.35)
        wrapper.position.set(0, -1.35 - minY, 0);
        console.log("Wrapper group ground aligned. World Y position set to:", wrapper.position.y);

        // Map and load high-quality textures manually
        const textureLoader = new THREE.TextureLoader();
        const diffuseMap = textureLoader.load('22-rp_manuel_animated_001_dancing_fbx/tex/rp_manuel_animated_001_dif.jpg');
        diffuseMap.encoding = THREE.sRGBEncoding;
        
        const normalMap = textureLoader.load('22-rp_manuel_animated_001_dancing_fbx/tex/rp_manuel_animated_001_norm.jpg');

        fbx.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material = new THREE.MeshStandardMaterial({
                    map: diffuseMap,
                    normalMap: normalMap,
                    roughness: 0.6,
                    metalness: 0.05,
                    skinning: true // Enable bones skinning for live animation deformation
                });
            }

            // Search for head and left hand bones for hotspots attachment
            if (child.isBone) {
                const name = child.name.toLowerCase();
                if (name.includes('head')) {
                    headBone = child;
                    console.log("Targeted Head bone:", child.name);
                }
                if (name.includes('hand') && (name.includes('left') || name.includes('_l_') || name.includes(':l'))) {
                    handBone = child;
                    console.log("Targeted Hand bone:", child.name);
                }
            }
        });

        scene.add(wrapper);
        headModel = wrapper; // Set wrapper as the headModel

        // Setup Animation Mixer on fbx directly (which holds the animations)
        mixer = new THREE.AnimationMixer(fbx);
        if (fbx.animations && fbx.animations.length > 0) {
            const action = mixer.clipAction(fbx.animations[0]);
            action.play();
        }

        // Adjust default camera positions for a full-body model initially
        defaultCameraPos.set(0, 0.4, 3.5);
        defaultCameraLookAt.set(0, 0.2, 0);
        
        if (!activeSense) {
            targetCameraPos.copy(defaultCameraPos);
            targetCameraLookAt.copy(defaultCameraLookAt);
        }
        
        showToast('Model FBX Dancer berhasil dimuat!', 'success');
    }

    function setupFallbackModel() {
        // Choose model based on active project
        if (currentProject.id === 'bagian_tumbuhan') {
            headModel = buildPlantModel();
        } else {
            headModel = buildCharacterModel();
        }
        scene.add(headModel);
        
        // Set camera per-project defaults
        const cp = currentProject.defaultCameraPos;
        const cl = currentProject.defaultCameraLookAt;
        defaultCameraPos.set(cp.x, cp.y, cp.z);
        defaultCameraLookAt.set(cl.x, cl.y, cl.z);
        if (!activeSense) {
            targetCameraPos.copy(defaultCameraPos);
            targetCameraLookAt.copy(defaultCameraLookAt);
            if (camera && controls) {
                camera.position.copy(defaultCameraPos);
                controls.target.copy(defaultCameraLookAt);
                controls.update();
            }
        }
    }

    function buildPlantModel() {
        const group = new THREE.Group();

        // Materials for cartoon plant aesthetics
        const stemMat = new THREE.MeshStandardMaterial({ color: 0x84cc16, roughness: 0.6, metalness: 0.05 });
        const leafMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.5, side: THREE.DoubleSide });
        const fruitMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.2, metalness: 0.1 });
        const sepalMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.6 });
        const flowerMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.4 });
        const rootMat = new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.9 });
        const soilMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

        // 1. Soil Base (to ground the plant roots)
        const soilGeo = new THREE.CylinderGeometry(0.8, 0.9, 0.15, 24);
        const soilMesh = new THREE.Mesh(soilGeo, soilMat);
        soilMesh.position.set(0, -1.35, 0);
        soilMesh.receiveShadow = true;
        group.add(soilMesh);

        // 2. Main Stem
        const stemGeo = new THREE.CylinderGeometry(0.045, 0.065, 2.5, 16);
        const stemMesh = new THREE.Mesh(stemGeo, stemMat);
        stemMesh.position.set(0, -0.1, 0);
        stemMesh.castShadow = true;
        stemMesh.receiveShadow = true;
        group.add(stemMesh);

        // 3. Branches (Batang Cabang)
        const branchGeo = new THREE.CylinderGeometry(0.02, 0.03, 0.6, 12);
        
        // Branch 1 (left)
        const branch1 = new THREE.Mesh(branchGeo, stemMat);
        branch1.rotation.z = Math.PI / 4; // Angle out to left
        branch1.position.set(-0.2, 0.3, 0);
        branch1.castShadow = true;
        group.add(branch1);

        // Branch 2 (right)
        const branch2 = new THREE.Mesh(branchGeo, stemMat);
        branch2.rotation.z = -Math.PI / 3.5; // Angle out to right
        branch2.position.set(0.2, 0.0, 0.1);
        branch2.castShadow = true;
        group.add(branch2);

        // Branch 3 (back/left)
        const branch3 = new THREE.Mesh(branchGeo, stemMat);
        branch3.rotation.x = -Math.PI / 4;
        branch3.rotation.z = Math.PI / 6;
        branch3.position.set(-0.1, 0.7, -0.15);
        branch3.castShadow = true;
        group.add(branch3);

        // 4. Roots (Akar)
        const mainRootGeo = new THREE.CylinderGeometry(0.06, 0.02, 0.9, 12);
        const mainRoot = new THREE.Mesh(mainRootGeo, rootMat);
        mainRoot.position.set(0, -1.8, 0);
        mainRoot.castShadow = true;
        group.add(mainRoot);

        // Branching roots
        for (let i = 0; i < 5; i++) {
            const rBranch = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.008, 0.5, 8), rootMat);
            rBranch.position.set(0, -1.6 - (i * 0.08), 0);
            rBranch.rotation.z = (Math.random() - 0.5) * 1.2;
            rBranch.rotation.y = (i * Math.PI * 0.4);
            rBranch.rotation.x = 0.3 + Math.random() * 0.4;
            rBranch.translateY(-0.25);
            group.add(rBranch);
        }

        // 5. Leaves (Daun)
        const leafGeo = new THREE.SphereGeometry(0.18, 16, 16);
        
        // Leaf 1 on Branch 1 (left)
        const leaf1 = new THREE.Mesh(leafGeo, leafMat);
        leaf1.scale.set(1.3, 0.03, 0.65);
        leaf1.rotation.z = Math.PI / 4;
        leaf1.rotation.y = Math.PI / 6;
        leaf1.position.set(-0.45, 0.5, 0.1);
        leaf1.castShadow = true;
        group.add(leaf1);

        // Leaf 2 on Branch 2 (right)
        const leaf2 = new THREE.Mesh(leafGeo, leafMat);
        leaf2.scale.set(1.2, 0.03, 0.6);
        leaf2.rotation.z = -Math.PI / 4;
        leaf2.rotation.y = -Math.PI / 3;
        leaf2.position.set(0.45, 0.2, 0.25);
        leaf2.castShadow = true;
        group.add(leaf2);

        // Leaf 3 (top left)
        const leaf3 = new THREE.Mesh(leafGeo, leafMat);
        leaf3.scale.set(1.1, 0.03, 0.55);
        leaf3.rotation.z = Math.PI / 5;
        leaf3.position.set(-0.25, 0.9, -0.2);
        leaf3.castShadow = true;
        group.add(leaf3);

        // Leaf 4 (mid lower stem)
        const leaf4 = new THREE.Mesh(leafGeo, leafMat);
        leaf4.scale.set(1.3, 0.03, 0.7);
        leaf4.rotation.z = -Math.PI / 6;
        leaf4.rotation.y = Math.PI / 4;
        leaf4.position.set(0.2, -0.4, 0.15);
        leaf4.castShadow = true;
        group.add(leaf4);

        // Leaf 5 (very top)
        const leaf5 = new THREE.Mesh(leafGeo, leafMat);
        leaf5.scale.set(1.0, 0.03, 0.5);
        leaf5.rotation.z = -Math.PI / 8;
        leaf5.position.set(0.08, 1.25, -0.05);
        leaf5.castShadow = true;
        group.add(leaf5);

        // 6. Fruits (Buah Tomat)
        const fruitGeo = new THREE.SphereGeometry(0.18, 24, 24);
        const sepalGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 6);

        // Tomato 1 (big & red)
        const tomato1Group = new THREE.Group();
        const tomato1 = new THREE.Mesh(fruitGeo, fruitMat);
        tomato1.scale.set(1.1, 0.95, 1.1);
        tomato1.castShadow = true;
        const sepal1 = new THREE.Mesh(sepalGeo, sepalMat);
        sepal1.position.y = 0.18;
        tomato1Group.add(tomato1, sepal1);
        tomato1Group.position.set(0.25, 0.2, 0.25);
        group.add(tomato1Group);

        // Tomato 2 (smaller red)
        const tomato2Group = new THREE.Group();
        const tomato2 = new THREE.Mesh(fruitGeo, fruitMat);
        tomato2.scale.set(0.9, 0.8, 0.9);
        tomato2.castShadow = true;
        const sepal2 = new THREE.Mesh(sepalGeo, sepalMat);
        sepal2.position.y = 0.15;
        tomato2Group.add(tomato2, sepal2);
        tomato2Group.position.set(0.32, 0.05, 0.35);
        group.add(tomato2Group);

        // Tomato 3 (yellowish-green)
        const tomato3Group = new THREE.Group();
        const fruitMatGreenish = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.3 });
        const tomato3 = new THREE.Mesh(fruitGeo, fruitMatGreenish);
        tomato3.scale.set(1.0, 0.88, 1.0);
        tomato3.castShadow = true;
        const sepal3 = new THREE.Mesh(sepalGeo, sepalMat);
        sepal3.position.y = 0.16;
        tomato3Group.add(tomato3, sepal3);
        tomato3Group.position.set(-0.25, -0.2, 0.3);
        group.add(tomato3Group);

        // 7. Flowers (Bunga Kuning)
        const flowerGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 5);
        const flowerCenterGeo = new THREE.SphereGeometry(0.03, 8, 8);
        const flowerCenterMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 });

        // Flower 1
        const flower1Group = new THREE.Group();
        const petal1 = new THREE.Mesh(flowerGeo, flowerMat);
        petal1.rotation.x = Math.PI / 3;
        const center1 = new THREE.Mesh(flowerCenterGeo, flowerCenterMat);
        center1.position.set(0, 0.02, 0.02);
        flower1Group.add(petal1, center1);
        flower1Group.position.set(0.1, 1.1, 0.15);
        group.add(flower1Group);

        // Flower 2
        const flower2Group = new THREE.Group();
        const petal2 = new THREE.Mesh(flowerGeo, flowerMat);
        petal2.rotation.x = Math.PI / 4;
        petal2.rotation.y = Math.PI / 4;
        const center2 = new THREE.Mesh(flowerCenterGeo, flowerCenterMat);
        center2.position.set(0, 0.02, 0.02);
        flower2Group.add(petal2, center2);
        flower2Group.position.set(-0.15, 1.0, 0.2);
        group.add(flower2Group);

        group.scale.set(1.0, 1.0, 1.0);
        group.position.y = 0.0;

        return group;
    }

    function buildCharacterModel() {
        const group = new THREE.Group();

        // High-quality materials for cartoon chibi aesthetics
        const skinMat = new THREE.MeshStandardMaterial({ color: 0xffd3b6, roughness: 0.45, metalness: 0.05 });
        const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 });
        const eyeIrisMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.1 });
        const eyePupilMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.0 });
        const eyeHighlightMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.0 });
        const hairMat = new THREE.MeshStandardMaterial({ color: 0x1e1b4b, roughness: 0.7, metalness: 0.05 });
        const shirtMat = new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.6, metalness: 0.02 });
        const collarMat = new THREE.MeshStandardMaterial({ color: 0xff8787, roughness: 0.6 });
        const pantsMat = new THREE.MeshStandardMaterial({ color: 0x312e81, roughness: 0.7 });
        const shoeMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5 });
        const shoeTrimMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
        const noseMat = new THREE.MeshStandardMaterial({ color: 0xfecdd3, roughness: 0.5 });
        const tongueMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.2 });
        const mouthBackMat = new THREE.MeshStandardMaterial({ color: 0x4c0519, roughness: 0.9 });

        // 1. Torso (Cute Cartoon Shirt)
        const shirtGeo = new THREE.BoxGeometry(0.75, 0.9, 0.45);
        const shirtMesh = new THREE.Mesh(shirtGeo, shirtMat);
        shirtMesh.position.set(0, -1.0, 0);
        shirtMesh.castShadow = true;
        shirtMesh.receiveShadow = true;
        group.add(shirtMesh);

        // Collar
        const collarGeo = new THREE.BoxGeometry(0.48, 0.1, 0.42);
        const collarMesh = new THREE.Mesh(collarGeo, collarMat);
        collarMesh.position.set(0, -0.52, 0);
        group.add(collarMesh);

        // 2. Neck
        const neckGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.3, 16);
        const neckMesh = new THREE.Mesh(neckGeo, skinMat);
        neckMesh.position.set(0, -0.42, 0);
        neckMesh.castShadow = true;
        neckMesh.receiveShadow = true;
        group.add(neckMesh);

        // 3. Head (Cute Base Shape)
        const headGeo = new THREE.SphereGeometry(0.65, 32, 32);
        const headMesh = new THREE.Mesh(headGeo, skinMat);
        headMesh.scale.set(1.0, 1.15, 0.95);
        headMesh.position.set(0, 0.2, 0);
        headMesh.castShadow = true;
        headMesh.receiveShadow = true;
        group.add(headMesh);

        // 4. Eyes with dynamic light highlights
        const eyeGeo = new THREE.SphereGeometry(0.11, 24, 24);
        const irisGeo = new THREE.SphereGeometry(0.065, 24, 24);
        const pupilGeo = new THREE.SphereGeometry(0.035, 16, 16);
        const highlightGeo = new THREE.SphereGeometry(0.016, 8, 8);

        // Right Eye
        const rightEyeGroup = new THREE.Group();
        const rightEyeWhite = new THREE.Mesh(eyeGeo, eyeWhiteMat);
        const rightEyeIris = new THREE.Mesh(irisGeo, eyeIrisMat);
        rightEyeIris.position.set(0, 0, 0.055);
        rightEyeIris.scale.set(1, 1, 0.4);
        const rightEyePupil = new THREE.Mesh(pupilGeo, eyePupilMat);
        rightEyePupil.position.set(0, 0, 0.085);
        rightEyePupil.scale.set(1, 1, 0.4);
        
        const rightEyeHighlight = new THREE.Mesh(highlightGeo, eyeHighlightMat);
        rightEyeHighlight.position.set(0.03, 0.03, 0.098);
        rightEyeGroup.add(rightEyeWhite, rightEyeIris, rightEyePupil, rightEyeHighlight);
        rightEyeGroup.position.set(0.22, 0.35, 0.52);
        group.add(rightEyeGroup);

        // Left Eye
        const leftEyeGroup = new THREE.Group();
        const leftEyeWhite = new THREE.Mesh(eyeGeo, eyeWhiteMat);
        const leftEyeIris = new THREE.Mesh(irisGeo, eyeIrisMat);
        leftEyeIris.position.set(0, 0, 0.055);
        leftEyeIris.scale.set(1, 1, 0.4);
        const leftEyePupil = new THREE.Mesh(pupilGeo, eyePupilMat);
        leftEyePupil.position.set(0, 0, 0.085);
        leftEyePupil.scale.set(1, 1, 0.4);
        
        const leftEyeHighlight = new THREE.Mesh(highlightGeo, eyeHighlightMat);
        leftEyeHighlight.position.set(0.03, 0.03, 0.098);
        leftEyeGroup.add(leftEyeWhite, leftEyeIris, leftEyePupil, leftEyeHighlight);
        leftEyeGroup.position.set(-0.22, 0.35, 0.52);
        group.add(leftEyeGroup);

        // 5. Nose
        const noseGeo = new THREE.SphereGeometry(0.07, 16, 16);
        const noseMesh = new THREE.Mesh(noseGeo, noseMat);
        noseMesh.scale.set(1.0, 1.25, 1.4);
        noseMesh.position.set(0, 0.1, 0.63);
        noseMesh.castShadow = true;
        group.add(noseMesh);

        // 6. Mouth & Tongue
        const mouthGroup = new THREE.Group();
        const mouthBackGeo = new THREE.BoxGeometry(0.25, 0.08, 0.08);
        const mouthBackMesh = new THREE.Mesh(mouthBackGeo, mouthBackMat);
        mouthGroup.add(mouthBackMesh);

        const tongueGeo = new THREE.BoxGeometry(0.14, 0.04, 0.12);
        const tongueMesh = new THREE.Mesh(tongueGeo, tongueMat);
        tongueMesh.position.set(0, -0.02, 0.025);
        tongueMesh.name = "tongue_mesh";
        mouthGroup.add(tongueMesh);
        
        mouthGroup.position.set(0, -0.18, 0.56);
        group.add(mouthGroup);

        // 7. Ears
        const earGeo = new THREE.TorusGeometry(0.1, 0.035, 8, 16);
        
        const leftEarMesh = new THREE.Mesh(earGeo, skinMat);
        leftEarMesh.position.set(-0.68, 0.25, 0.0);
        leftEarMesh.rotation.y = Math.PI / 2;
        leftEarMesh.scale.set(1.1, 1.4, 1.0);
        group.add(leftEarMesh);

        const rightEarMesh = new THREE.Mesh(earGeo, skinMat);
        rightEarMesh.position.set(0.68, 0.25, 0.0);
        rightEarMesh.rotation.y = -Math.PI / 2;
        rightEarMesh.scale.set(1.1, 1.4, 1.0);
        group.add(rightEarMesh);

        // 8. Hair
        const hairGroup = new THREE.Group();
        const topHairGeo = new THREE.SphereGeometry(0.52, 16, 16);
        const topHair = new THREE.Mesh(topHairGeo, hairMat);
        topHair.scale.set(1.3, 0.9, 1.3);
        topHair.position.set(0, 0.65, -0.05);
        hairGroup.add(topHair);

        const sideBangGeo = new THREE.SphereGeometry(0.24, 12, 12);
        const leftSideHair = new THREE.Mesh(sideBangGeo, hairMat);
        leftSideHair.position.set(-0.45, 0.45, 0.3);
        leftSideHair.scale.set(1.0, 1.5, 1.0);
        
        const rightSideHair = new THREE.Mesh(sideBangGeo, hairMat);
        rightSideHair.position.set(0.45, 0.45, 0.3);
        rightSideHair.scale.set(1.0, 1.5, 1.0);
        hairGroup.add(leftSideHair, rightSideHair);

        const frontBangGeo = new THREE.SphereGeometry(0.18, 12, 12);
        const frontBangCenter = new THREE.Mesh(frontBangGeo, hairMat);
        frontBangCenter.position.set(0, 0.68, 0.48);
        frontBangCenter.scale.set(1.2, 0.8, 1.0);

        const frontBangLeft = new THREE.Mesh(frontBangGeo, hairMat);
        frontBangLeft.position.set(-0.25, 0.65, 0.46);
        frontBangLeft.scale.set(1.0, 0.8, 1.0);

        const frontBangRight = new THREE.Mesh(frontBangGeo, hairMat);
        frontBangRight.position.set(0.25, 0.65, 0.46);
        frontBangRight.scale.set(1.0, 0.8, 1.0);
        hairGroup.add(frontBangCenter, frontBangLeft, frontBangRight);

        const backHairGeo = new THREE.BoxGeometry(0.9, 0.7, 0.45);
        const backHair = new THREE.Mesh(backHairGeo, hairMat);
        backHair.position.set(0, 0.25, -0.42);
        hairGroup.add(backHair);

        group.add(hairGroup);

        // 9. Hips & Pants
        const pantsGeo = new THREE.BoxGeometry(0.77, 0.3, 0.47);
        const pantsMesh = new THREE.Mesh(pantsGeo, pantsMat);
        pantsMesh.position.set(0, -1.5, 0);
        pantsMesh.castShadow = true;
        group.add(pantsMesh);

        // 10. Legs
        const legGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.7, 16);
        
        const leftLeg = new THREE.Mesh(legGeo, pantsMat);
        leftLeg.position.set(-0.2, -1.95, 0);
        leftLeg.castShadow = true;
        group.add(leftLeg);

        const rightLeg = new THREE.Mesh(legGeo, pantsMat);
        rightLeg.position.set(0.2, -1.95, 0);
        rightLeg.castShadow = true;
        group.add(rightLeg);

        // Ankles
        const ankleGeo = new THREE.CylinderGeometry(0.11, 0.11, 0.15, 16);
        const leftAnkle = new THREE.Mesh(ankleGeo, skinMat);
        leftAnkle.position.set(-0.2, -2.32, 0);
        group.add(leftAnkle);

        const rightAnkle = new THREE.Mesh(ankleGeo, skinMat);
        rightAnkle.position.set(0.2, -2.32, 0);
        group.add(rightAnkle);

        // 11. Sneakers
        const shoeGeo = new THREE.BoxGeometry(0.2, 0.16, 0.34);
        const soleGeo = new THREE.BoxGeometry(0.22, 0.05, 0.36);

        // Left Shoe
        const leftShoeGroup = new THREE.Group();
        const leftShoeBody = new THREE.Mesh(shoeGeo, shoeMat);
        const leftShoeSole = new THREE.Mesh(soleGeo, shoeTrimMat);
        leftShoeSole.position.y = -0.09;
        leftShoeGroup.add(leftShoeBody, leftShoeSole);
        leftShoeGroup.position.set(-0.2, -2.48, 0.05);
        leftShoeGroup.castShadow = true;
        group.add(leftShoeGroup);

        // Right Shoe
        const rightShoeGroup = new THREE.Group();
        const rightShoeBody = new THREE.Mesh(shoeGeo, shoeMat);
        const rightShoeSole = new THREE.Mesh(soleGeo, shoeTrimMat);
        rightShoeSole.position.y = -0.09;
        rightShoeGroup.add(rightShoeBody, rightShoeSole);
        rightShoeGroup.position.set(0.2, -2.48, 0.05);
        rightShoeGroup.castShadow = true;
        group.add(rightShoeGroup);

        // 12. Arms & Hands
        const upperArmGeo = new THREE.CylinderGeometry(0.1, 0.09, 0.6, 16);
        const forearmGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.5, 16);
        const handGeo = new THREE.SphereGeometry(0.1, 16, 16);

        // Left Arm
        const leftArmGroup = new THREE.Group();
        const leftUpperArm = new THREE.Mesh(upperArmGeo, shirtMat);
        leftUpperArm.position.y = -0.3;
        leftArmGroup.add(leftUpperArm);

        const leftForearm = new THREE.Mesh(forearmGeo, skinMat);
        leftForearm.position.set(0, -0.8, 0);
        leftArmGroup.add(leftForearm);

        const leftHand = new THREE.Mesh(handGeo, skinMat);
        leftHand.position.set(0, -1.08, 0);
        leftHand.castShadow = true;
        leftArmGroup.add(leftHand);

        leftArmGroup.position.set(-0.48, -0.8, 0);
        leftArmGroup.rotation.z = Math.PI / 12;
        group.add(leftArmGroup);

        // Right Arm
        const rightArmGroup = new THREE.Group();
        const rightUpperArm = new THREE.Mesh(upperArmGeo, shirtMat);
        rightUpperArm.position.y = -0.3;
        rightArmGroup.add(rightUpperArm);

        const rightForearm = new THREE.Mesh(forearmGeo, skinMat);
        rightForearm.position.set(0, -0.8, 0);
        rightArmGroup.add(rightForearm);

        const rightHand = new THREE.Mesh(handGeo, skinMat);
        rightHand.position.set(0, -1.08, 0);
        rightHand.castShadow = true;
        rightArmGroup.add(rightHand);

        rightArmGroup.position.set(0.48, -0.8, 0);
        rightArmGroup.rotation.z = -Math.PI / 12;
        group.add(rightArmGroup);

        group.scale.set(1.2, 1.2, 1.2);
        group.position.y = 0.15;

        return group;
    }

    function onWindowResize() {
        if (!renderer || !camera) return;
        const container = document.getElementById('threejs-container');
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    // Camera animation interpolation helper (only runs when transitioning to lock target)
    function updateCameraInterpolation() {
        if (!isTransitioning) return;
        
        // Linearly interpolate camera position and controls target
        camera.position.lerp(targetCameraPos, 0.05);
        controls.target.lerp(targetCameraLookAt, 0.05);
        controls.update();

        // Stop transition when close enough to allow free mouse rotation
        if (camera.position.distanceTo(targetCameraPos) < 0.01 && 
            controls.target.distanceTo(targetCameraLookAt) < 0.01) {
            isTransitioning = false;
            camera.position.copy(targetCameraPos);
            controls.target.copy(targetCameraLookAt);
        }
    }

    function animate() {
        requestAnimationFrame(animate);

        if (currentTab === 'learning') {
            updateCameraInterpolation();
            updateHotspotLabelsProjection();
            
            // Update animation mixer
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);

            // Auto rotate only when idle (no selected sense and not transitioning)
            if (!activeSense && !isTransitioning && controls.autoRotate) {
                controls.update();
            }

            // Subtle breathing idle animation (character feels alive!) - only for fallback model
            if (headModel && !mixer) {
                if (!activeSense) {
                    headModel.position.y = 0.15 + Math.sin(Date.now() * 0.0016) * 0.02;
                    headModel.rotation.y = Math.sin(Date.now() * 0.0006) * 0.035;
                } else {
                    // Smoothly return to center resting position
                    headModel.position.y = THREE.MathUtils.lerp(headModel.position.y, 0.15, 0.08);
                    headModel.rotation.y = THREE.MathUtils.lerp(headModel.rotation.y, 0, 0.08);
                }

                // Tongue animation when Lidah is active
                const tongue = headModel.getObjectByName('tongue_mesh');
                if (tongue) {
                    if (activeSense === 'lidah') {
                        tongue.position.z = 0.065 + Math.sin(Date.now() * 0.008) * 0.012;
                    } else {
                        tongue.position.z = THREE.MathUtils.lerp(tongue.position.z, 0.02, 0.1);
                    }
                }
            }

            // Track target camera focus dynamically if character is dancing
            if (activeSense && isTransitioning && headBone) {
                const tempV = new THREE.Vector3();
                if (activeSense === 'mata' || activeSense === 'hidung' || activeSense === 'lidah' || activeSense === 'telinga') {
                    headBone.getWorldPosition(tempV);
                    targetCameraLookAt.copy(tempV);
                    if (activeSense === 'mata') targetCameraLookAt.y += 0.08;
                    else if (activeSense === 'lidah') targetCameraLookAt.y -= 0.06;
                } else if (activeSense === 'kulit' && handBone) {
                    handBone.getWorldPosition(tempV);
                    targetCameraLookAt.copy(tempV);
                }
            }

            renderer.render(scene, camera);
        }
    }

    // Projects 3D hotspots to 2D coordinates on the HTML overlay
    function updateHotspotLabelsProjection() {
        if (!camera || !renderer) return;
        
        const container = document.getElementById('threejs-container');
        const width = container.clientWidth;
        const height = container.clientHeight;
        const tempV = new THREE.Vector3();

        Object.keys(currentProject.hotspotCoords).forEach(sense => {
            const labelBtn = document.querySelector(`.hotspot-label.label-${sense}`);
            if (!labelBtn) return;

            tempV.copy(currentProject.hotspotCoords[sense]);

            if (headModel) {
                headModel.updateMatrixWorld(true);
                tempV.applyMatrix4(headModel.matrixWorld);
            }

            tempV.project(camera);

            const isBehind = tempV.z > 1.0;

            if (isBehind) {
                labelBtn.style.display = 'none';
            } else {
                labelBtn.style.display = 'flex';
                const x = (tempV.x * 0.5 + 0.5) * width;
                const y = (tempV.y * -0.5 + 0.5) * height;
                
                labelBtn.style.left = `${x}px`;
                labelBtn.style.top = `${y}px`;
            }
        });
    }

    // --- Interactive Sense Selection ---
    function selectSense(sense) {
        const senses = currentProject.senses;
        if (!senses[sense]) return;

        document.querySelectorAll('.hotspot-label').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-sense') === sense) {
                btn.classList.add('active');
            }
        });

        activeSense = sense;
        const data = senses[sense];

        if (mixer) mixer.timeScale = 0.05;

        const tempV = new THREE.Vector3();
        if (headBone && (sense === 'mata' || sense === 'hidung' || sense === 'lidah' || sense === 'telinga')) {
            headBone.getWorldPosition(tempV);
            targetCameraLookAt.copy(tempV);
            if (sense === 'mata') targetCameraLookAt.y += 0.08;
            else if (sense === 'lidah') targetCameraLookAt.y -= 0.06;
            targetCameraPos.set(tempV.x + data.camPos.x, tempV.y + (data.camPos.y - 0.35), tempV.z + data.camPos.z);
        } else if (handBone && sense === 'kulit') {
            handBone.getWorldPosition(tempV);
            targetCameraLookAt.copy(tempV);
            targetCameraPos.set(tempV.x - 0.6, tempV.y + 0.3, tempV.z + 0.6);
        } else {
            const coords = currentProject.hotspotCoords[sense];
            if (coords) tempV.copy(coords);
            if (headModel) {
                headModel.updateMatrixWorld(true);
                tempV.applyMatrix4(headModel.matrixWorld);
            }
            targetCameraLookAt.copy(tempV);
            const dx = data.camPos.x - data.camTarget.x;
            const dy = data.camPos.y - data.camTarget.y;
            const dz = data.camPos.z - data.camTarget.z;
            targetCameraPos.set(tempV.x + dx, tempV.y + dy, tempV.z + dz);
        }

        isTransitioning = true;
        controls.autoRotate = false; // Disable rotation when focusing

        // Update Info Card
        detailsEmpty.classList.add('hidden');
        detailsContent.classList.remove('hidden');

        infoTitle.textContent = data.title;
        infoPrefix.textContent = data.prefix;
        infoIconContainer.textContent = data.icon;
        
        // Custom background color wrapper based on selected sense
        infoIconContainer.style.backgroundColor = `rgba(from ${data.color} r g b / 0.1)`;
        infoIconContainer.style.borderColor = data.color;
        
        infoFunction.textContent = data.function;
        infoFunction.style.color = data.color;
        infoDescription.textContent = data.description;

        // Trigger Audio Speech
        speakExplanation(data.voiceText);
    }

    function resetSenseSelection() {
        activeSense = null;
        document.querySelectorAll('.hotspot-label').forEach(btn => btn.classList.remove('active'));
        
        if (mixer) mixer.timeScale = 1.0;

        targetCameraPos.copy(defaultCameraPos);
        targetCameraLookAt.copy(defaultCameraLookAt);
        isTransitioning = true;
        controls.autoRotate = true;

        detailsContent.classList.add('hidden');
        detailsEmpty.classList.remove('hidden');

        stopVoiceExplanation();
    }

    // Event listeners for hotspots & quick select (delegated)
    document.getElementById('labels-overlay').addEventListener('click', (e) => {
        const btn = e.target.closest('.hotspot-label');
        if (btn) {
            e.stopPropagation();
            selectSense(btn.getAttribute('data-sense'));
        }
    });

    document.getElementById('quick-select-container').addEventListener('click', (e) => {
        const btn = e.target.closest('.quick-btn');
        if (btn) selectSense(btn.getAttribute('data-sense'));
    });

    // --- Load Project Dynamically ---
    function loadProject(projectId) {
        currentProject = PROJECTS[projectId];
        if (!currentProject) return;

        resetSenseSelection();
        stopVoiceExplanation();

        // Remove old model from scene
        if (headModel) { scene.remove(headModel); headModel = null; }
        mixer = null; headBone = null; handBone = null;

        // Hide loading spinner and build new model
        hideLoader();
        setupFallbackModel();

        // Rebuild hotspot labels
        const overlay = document.getElementById('labels-overlay');
        overlay.innerHTML = '';
        Object.keys(currentProject.senses).forEach(key => {
            const btn = document.createElement('button');
            btn.className = `hotspot-label label-${key}`;
            btn.setAttribute('data-sense', key);
            btn.innerHTML = `<span class="ring"></span><span class="dot"></span>${currentProject.senses[key].title}`;
            overlay.appendChild(btn);
        });

        // Rebuild quick-select buttons
        const qsc = document.getElementById('quick-select-container');
        qsc.innerHTML = '';
        Object.keys(currentProject.senses).forEach(key => {
            const s = currentProject.senses[key];
            const btn = document.createElement('button');
            btn.className = 'quick-btn';
            btn.setAttribute('data-sense', key);
            btn.textContent = `${s.icon} ${s.title}`;
            qsc.appendChild(btn);
        });

        // Update sidebar brand title
        const brandH1 = document.querySelector('.sidebar-brand h1');
        if (brandH1) brandH1.textContent = currentProject.brandTitle;

        // Update empty panel text
        const detailsEmptyH3 = detailsEmpty.querySelector('h3');
        const detailsEmptyP = detailsEmpty.querySelector('p');
        if (currentProject.id === 'panca_indera') {
            if (detailsEmptyH3) detailsEmptyH3.textContent = 'Eksplorasi Panca Indera';
            if (detailsEmptyP) detailsEmptyP.textContent = 'Pilih salah satu indera pada model 3D atau daftar di bawah ini.';
        } else {
            if (detailsEmptyH3) detailsEmptyH3.textContent = 'Eksplorasi Bagian Tumbuhan';
            if (detailsEmptyP) detailsEmptyP.textContent = 'Pilih salah satu bagian pada model 3D atau daftar di bawah ini.';
        }

        // Rebuild guide timeline
        const timeline = document.getElementById('guide-timeline-container');
        if (timeline) {
            timeline.innerHTML = '';
            currentProject.timelineSteps.forEach(ts => {
                const item = document.createElement('div');
                item.className = 'timeline-item';
                item.innerHTML = `<div class="timeline-step">${ts.step}</div><div class="timeline-content"><h4>${ts.title}</h4><p>${ts.desc}</p></div>`;
                timeline.appendChild(item);
            });
        }

        // Update quiz title & intro
        const quizH2 = document.querySelector('#quiz-start h2');
        const quizIntroP = document.querySelector('#quiz-start > p');
        if (quizH2) quizH2.textContent = currentProject.quizTitle;
        if (quizIntroP) quizIntroP.textContent = currentProject.quizIntro;

        // Update cert topic
        const certTopic = document.querySelector('.cert-topic');
        if (certTopic) certTopic.textContent = currentProject.certTopic;

        showToast(`Materi "${currentProject.title}" berhasil dimuat!`, 'success');
    }

    // Dropdown project selector listener
    const projectDropdown = document.getElementById('project-selector-dropdown');
    if (projectDropdown) {
        projectDropdown.addEventListener('change', (e) => loadProject(e.target.value));
    }

    // Control HUD listeners
    btnZoomIn.addEventListener('click', () => {
        camera.position.z = Math.max(camera.position.z - 0.4, 1.0);
        targetCameraPos.z = camera.position.z;
    });
    btnZoomOut.addEventListener('click', () => {
        camera.position.z = Math.min(camera.position.z + 0.4, 6.0);
        targetCameraPos.z = camera.position.z;
    });
    btnResetCam.addEventListener('click', () => {
        resetSenseSelection();
    });

    btnExportGlb.addEventListener('click', () => {
        exportToGLB();
    });

    // Export 3D Chibi character to GLB format
    function exportToGLB() {
        if (!headModel) {
            showToast("Model 3D tidak tersedia untuk diekspor!", "error");
            return;
        }

        showToast("Mempersiapkan ekspor GLB...", "info");

        if (typeof THREE.GLTFExporter === 'undefined') {
            showToast("Pustaka GLTFExporter belum dimuat!", "error");
            return;
        }

        const exporter = new THREE.GLTFExporter();
        const options = {
            binary: true,
            animations: [],
            onlyVisible: false
        };

        exporter.parse(
            headModel,
            function (gltf) {
                const isBinary = gltf instanceof ArrayBuffer;
                let data = gltf;
                if (!isBinary && typeof gltf === 'object') {
                    data = JSON.stringify(gltf);
                }

                const blob = new Blob([data], { type: isBinary ? 'application/octet-stream' : 'application/json' });
                const url = URL.createObjectURL(blob);
                
                const link = document.createElement('a');
                link.href = url;
                link.download = isBinary ? 'chibi_panca_indera_model.glb' : 'chibi_panca_indera_model.gltf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                // Convert to base64 and print to console so the agent can capture it
                const reader = new FileReader();
                reader.onloadend = function() {
                    const base64data = reader.result.split(',')[1];
                    console.log("[GLB_EXPORT_BASE64] " + base64data);
                };
                reader.readAsDataURL(blob);

                showToast("Berhasil mengekspor model!", "success");
            },
            options
        );
    }

    // Click outside model to reset
    document.getElementById('threejs-container').addEventListener('click', (e) => {
        // Make sure it doesn't trigger if clicking hotspot overlay labels
        if (e.target.closest('.hotspot-label')) return;
        resetSenseSelection();
    });

    // --- Voice Explanation (Text to Speech) ---
    function speakExplanation(text) {
        stopVoiceExplanation();

        if (!speechSynth) {
            console.warn('SpeechSynthesis API not supported in this browser.');
            return;
        }

        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.lang = 'id-ID'; // Indonesian
        
        // Find Indonesian voice
        const voices = speechSynth.getVoices();
        const idVoice = voices.find(voice => voice.lang.includes('id') || voice.lang.includes('ID'));
        if (idVoice) {
            currentUtterance.voice = idVoice;
        }

        currentUtterance.onstart = () => {
            isSpeaking = true;
            btnPlaySound.classList.add('active');
            btnPlaySound.querySelector('span').textContent = "Menghentikan Suara...";
        };

        currentUtterance.onend = () => {
            cleanupSpeechState();
        };

        currentUtterance.onerror = () => {
            cleanupSpeechState();
        };

        speechSynth.speak(currentUtterance);
    }

    function stopVoiceExplanation() {
        if (speechSynth && speechSynth.speaking) {
            speechSynth.cancel();
        }
        cleanupSpeechState();
    }

    function cleanupSpeechState() {
        isSpeaking = false;
        btnPlaySound.classList.remove('active');
        btnPlaySound.querySelector('span').textContent = "Dengarkan Penjelasan Suara";
    }

    btnPlaySound.addEventListener('click', () => {
        if (isSpeaking) {
            stopVoiceExplanation();
        } else if (activeSense && currentProject.senses[activeSense]) {
            speakExplanation(currentProject.senses[activeSense].voiceText);
        }
    });

    // Need to handle voice list loading async in some browsers
    if (speechSynth && speechSynth.onvoiceschanged !== undefined) {
        speechSynth.onvoiceschanged = () => {
            // Pre-fetch voices
            speechSynth.getVoices();
        };
    }

    // --- AR Mode Simulator Logic ---
    async function startARMode() {
        switchTab('ar-preview');
        
        // Hide permissions if webcam allowed
        if (arStream) {
            arPermissionScreen.classList.add('hidden');
            startARCameraRendering();
            return;
        }

        // Trigger request
        requestCameraAccess();
    }

    async function requestCameraAccess() {
        // Check HTTPS requirement
        if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
            showToast('⚠️ Mode AR membutuhkan koneksi HTTPS. Buka via link Vercel (https://) untuk menggunakan kamera.', 'danger');
            return;
        }
        // Check browser support
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showToast('Browser ini tidak mendukung akses kamera. Coba Chrome atau Safari versi terbaru.', 'danger');
            return;
        }
        try {
            // Try back camera first, fall back to any camera
            let constraints = { video: { facingMode: { ideal: 'environment' } }, audio: false };
            try {
                arStream = await navigator.mediaDevices.getUserMedia(constraints);
            } catch (e) {
                // Fallback: try any camera
                arStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            }
            arVideo.srcObject = arStream;
            arPermissionScreen.classList.add('hidden');
            
            const initRendering = () => {
                if (arCameraActive) return;
                startARCameraRendering();
            };

            // Wait for video metadata to initialize sizing
            arVideo.onloadedmetadata = () => {
                arVideo.play().then(initRendering).catch(err => {
                    console.warn("Video play failed on metadata:", err);
                    initRendering();
                });
            };

            // Secondary safety: trigger playback and initialization after a short timeout
            setTimeout(() => {
                arVideo.play().then(initRendering).catch(err => {
                    console.warn("Video play failed on timeout fallback:", err);
                    initRendering();
                });
            }, 250);
        } catch (err) {
            console.error('Camera Access Error:', err);
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                showToast('Akses kamera ditolak. Buka Pengaturan Browser → Izin → Kamera → Izinkan.', 'danger');
            } else if (err.name === 'NotFoundError') {
                showToast('Kamera tidak ditemukan di perangkat ini.', 'danger');
            } else {
                showToast('Gagal mengakses kamera: ' + err.message, 'danger');
            }
        }
    }

    function startARCameraRendering() {
        if (arCameraActive) return; // Prevent double initialization
        arCameraActive = true;
        
        // Set canvas sizing match video display viewport size
        const container = arCanvas.parentElement;
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || (window.innerWidth * 0.56);
        arCanvas.width = width;
        arCanvas.height = height;

        // Initialize AR 3D Scene
        arScene = new THREE.Scene();

        // Transparent background
        arCamera = new THREE.PerspectiveCamera(45, arCanvas.width / arCanvas.height, 0.1, 100);
        arCamera.position.set(0, 0, 3.5);

        arRenderer = new THREE.WebGLRenderer({
            canvas: arCanvas,
            antialias: true,
            alpha: true // Critical for rendering over camera video element background
        });
        arRenderer.setSize(width, height);
        arRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Add soft lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        arScene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
        dirLight.position.set(3, 5, 4);
        arScene.add(dirLight);

        // Build a separate 3D character instance for AR
        // Build AR model matching the active project
        if (currentProject && currentProject.id === 'bagian_tumbuhan') {
            arModel = buildPlantModel();
        } else {
            arModel = buildCharacterModel();
        }
        arScene.add(arModel);

        // Apply starting states
        arModelScale = 1.0;
        arModelRotationY = 0;
        updateARModelMatrix();

        // Render loop for AR overlay
        animateAR();
        
        showToast('Kamera terhubung! Objek 3D telah ditempatkan.', 'success');
    }

    function updateARModelMatrix() {
        if (!arModel) return;
        arModel.scale.set(1.2 * arModelScale, 1.2 * arModelScale, 1.2 * arModelScale);
        arModel.rotation.y = arModelRotationY;
    }

    function animateAR() {
        if (!arCameraActive) return;
        requestAnimationFrame(animateAR);

        // Slow idle rotation on AR
        if (arModel) {
            // Let the user rotate it manually, or float slightly
            arModel.position.y = 0.15 + Math.sin(Date.now() * 0.0025) * 0.05;
        }

        arRenderer.render(arScene, arCamera);
    }

    function stopARCamera() {
        arCameraActive = false;
        
        // Stop video stream track
        if (arStream) {
            arStream.getTracks().forEach(track => track.stop());
            arStream = null;
        }
        arVideo.srcObject = null;
        
        if (arRenderer) {
            arRenderer.dispose();
            arRenderer = null;
        }
    }

    // AR Gizmos control handlers
    btnArScaleUp.addEventListener('click', () => {
        if (arModelScale < 2.0) {
            arModelScale += 0.15;
            updateARModelMatrix();
        }
    });

    btnArScaleDown.addEventListener('click', () => {
        if (arModelScale > 0.4) {
            arModelScale -= 0.15;
            updateARModelMatrix();
        }
    });

    btnArRotateY.addEventListener('click', () => {
        arModelRotationY += Math.PI / 4; // rotate 45 degrees
        updateARModelMatrix();
    });

    btnRequestCamera.addEventListener('click', requestCameraAccess);
    btnArTrigger.addEventListener('click', startARMode);
    btnArTriggerHUD.addEventListener('click', startARMode);
    btnArClose.addEventListener('click', () => {
        stopARCamera();
        switchTab('learning');
    });

    // Resize handler for AR screen
    window.addEventListener('resize', () => {
        if (currentTab === 'ar-preview' && arCameraActive && arRenderer) {
            const container = arCanvas.parentElement;
            arCanvas.width = container.clientWidth;
            arCanvas.height = container.clientHeight;
            
            arCamera.aspect = arCanvas.width / arCanvas.height;
            arCamera.updateProjectionMatrix();
            arRenderer.setSize(arCanvas.width, arCanvas.height);
        }
    });

    // --- Quiz Evaluation Logic ---
    btnStartQuiz.addEventListener('click', () => {
        // Prompt for student name for certificate
        const name = prompt("Masukkan namamu untuk sertifikat kelulusan:", "Siswa Hebat");
        if (name !== null) {
            const nameElements = document.querySelectorAll('.cert-name-display');
            nameElements.forEach(el => el.remove()); // Clear older
            
            const nameEl = document.createElement('h3');
            nameEl.className = 'cert-name-display';
            nameEl.style.fontFamily = 'var(--font-heading)';
            nameEl.style.fontSize = '1.75rem';
            nameEl.style.fontWeight = '800';
            nameEl.style.margin = '16px 0';
            nameEl.style.color = '#fff';
            nameEl.style.letterSpacing = '1px';
            nameEl.textContent = name.toUpperCase();
            
            // Insert inside certificate card before topic
            const certTopic = document.querySelector('.cert-topic');
            certTopic.parentElement.insertBefore(nameEl, certTopic);
        }

        quizCurrentQuestion = 0;
        quizScore = 0;
        quizStart.classList.add('hidden');
        quizResult.classList.add('hidden');
        quizPlayground.classList.remove('hidden');
        
        loadQuizQuestion();
    });

    function loadQuizQuestion() {
        const qData = currentProject.quizQuestions[quizCurrentQuestion];
        quizSelectedAnswer = null;
        
        const progressPercentage = ((quizCurrentQuestion + 1) / currentProject.quizQuestions.length) * 100;
        quizProgress.style.width = `${progressPercentage}%`;
        quizQuestionIndex.textContent = `Pertanyaan ${quizCurrentQuestion + 1} dari ${currentProject.quizQuestions.length}`;
        quizScoreDisplay.textContent = `Skor: ${quizScore}`;
        
        quizQuestionText.textContent = qData.question;
        
        quizOptionsContainer.innerHTML = '';
        qData.options.forEach((optText, index) => {
            const optBtn = document.createElement('button');
            optBtn.className = 'quiz-option';
            optBtn.innerHTML = `<span class="opt-bullet">${String.fromCharCode(65 + index)}.</span> <span>${optText}</span>`;
            optBtn.addEventListener('click', () => selectQuizAnswer(index));
            quizOptionsContainer.appendChild(optBtn);
        });

        quizFeedbackBox.className = 'quiz-feedback hidden';
        btnQuizNext.classList.add('hidden');
    }

    function selectQuizAnswer(selectedIndex) {
        if (quizSelectedAnswer !== null) return;

        const qData = currentProject.quizQuestions[quizCurrentQuestion];
        quizSelectedAnswer = selectedIndex;
        
        const optionBtns = quizOptionsContainer.querySelectorAll('.quiz-option');

        // Disable all buttons
        optionBtns.forEach(btn => btn.disabled = true);

        // Check correctness
        const isCorrect = selectedIndex === qData.answer;
        if (isCorrect) {
            quizScore += 20; // 5 questions, 20 points each = 100 max
            optionBtns[selectedIndex].classList.add('correct');
            quizFeedbackBox.className = 'quiz-feedback correct';
            quizFeedbackIcon.textContent = '✅';
            quizFeedbackText.textContent = qData.feedback;
            
            // Sound effect
            playBleep(true);
        } else {
            optionBtns[selectedIndex].classList.add('incorrect');
            optionBtns[qData.answer].classList.add('correct'); // Highlight true answer
            quizFeedbackBox.className = 'quiz-feedback incorrect';
            quizFeedbackIcon.textContent = '❌';
            quizFeedbackText.textContent = `Kurang tepat. Jawabannya: ${qData.options[qData.answer]}. \n${qData.feedback}`;
            
            // Sound effect
            playBleep(false);
        }

        // Show Next button
        btnQuizNext.classList.remove('hidden');
        quizScoreDisplay.textContent = `Skor: ${quizScore}`;
    }

    // Synthesized Sound Effects for Quiz Correct/Incorrect
    function playBleep(isCorrect) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            if (isCorrect) {
                // Happy chord
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
                osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
                osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
                osc.start();
                osc.stop(ctx.currentTime + 0.5);
            } else {
                // Sad buzzer
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(180, ctx.currentTime); 
                osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.35);
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
                osc.start();
                osc.stop(ctx.currentTime + 0.45);
            }
        } catch (e) {
            console.warn('Audio synthesis not supported or blocked:', e);
        }
    }

    btnQuizNext.addEventListener('click', () => {
        quizCurrentQuestion++;
        if (quizCurrentQuestion < currentProject.quizQuestions.length) {
            loadQuizQuestion();
        } else {
            showQuizResults();
        }
    });

    function showQuizResults() {
        quizPlayground.classList.add('hidden');
        quizResult.classList.remove('hidden');

        resultScore.textContent = `${quizScore} / 100`;

        if (quizScore >= 80) {
            resultEmoji.textContent = '🏆';
            resultTitle.textContent = 'Selamat! Kamu Lulus!';
            resultText.textContent = `Pemahamanmu tentang ${currentProject.title} luar biasa. Berikut sertifikat kelulusanmu:`;
            certificateBox.classList.remove('hidden');
            btnCertDownload.textContent = 'Tutup & Simpan';
        } else {
            resultEmoji.textContent = '📚';
            resultTitle.textContent = 'Belajar Lagi, Yuk!';
            resultText.textContent = `Skormu masih di bawah 80. Pelajari kembali materi ${currentProject.title} dengan memutar model 3D dan cobalah kuis lagi.`;
            certificateBox.classList.add('hidden');
            btnCertDownload.textContent = 'Tutup';
        }
    }

    btnRestartQuiz.addEventListener('click', () => {
        quizResult.classList.add('hidden');
        quizStart.classList.remove('hidden');
    });

    btnCertDownload.addEventListener('click', () => {
        quizResult.classList.add('hidden');
        switchTab('learning');
    });

    // --- Share & QR Code Dialog ---
    btnShare.addEventListener('click', () => {
        // Set actual location URL
        const currentUrl = window.location.href;
        shareUrlInput.value = currentUrl;

        // Populate dynamic QR Code image via QRServer API
        // Encode URL to prevent parameters breakage
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}&color=0f172a&bgcolor=ffffff`;
        qrCodeImg.src = qrApiUrl;

        // Open Modal
        shareModal.classList.remove('hidden');
    });

    function closeModal() {
        shareModal.classList.add('hidden');
    }

    btnCloseShare.addEventListener('click', closeModal);
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) closeModal();
    });

    btnCopyUrl.addEventListener('click', () => {
        shareUrlInput.select();
        shareUrlInput.setSelectionRange(0, 99999); // Mobile compatibility
        
        navigator.clipboard.writeText(shareUrlInput.value)
            .then(() => {
                showToast('Tautan berhasil disalin ke clipboard!', 'success');
            })
            .catch(err => {
                console.error('URL copy failed:', err);
                showToast('Gagal menyalin tautan. Salin secara manual.', 'danger');
            });
    });

    // --- Startup Initializations ---
    initLearning3D();

    // Read which project to load from the HTML page's body[data-project] attribute.
    const pageProject = 'bagian_tumbuhan'; // Hardcoded for this project
    
    // Sync the dropdown to the current page project (if dropdown exists)
    if (projectDropdown) projectDropdown.value = pageProject;
    
    // Load project immediately (Three.js is ready synchronously above)
    loadProject(pageProject);
    
    // Quick delay trigger resize to make sure ThreeJS container computes correct offset sizing
    triggerResize();
});
