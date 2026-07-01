<template>
    <div class="home-container">
        <main class="card">
            <div class="avatar-container">
                <img src="" alt="头像">
            </div>
            <h1></h1>
            <p class="tagline">· 欢迎来到我的主页</p>
            <footer>
                <div class="beian-info">
                    <span></span>
                    <span class="beian-divider">|</span>
                    <a href=""></a>
                    <span class="beian-divider">|</span>
                    <span>© 0-2026 .</span>
                </div>
            </footer>
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .home-container {
        height: auto;
        min-height: 100vh;
        padding: 1rem;
        align-items: flex-start;
        background: rgb(26, 26, 26);
    }
    .card {
        width: 100%;
        max-width: 1200px;
        margin-inline: auto;
        padding: clamp(2.5rem, 7vw, 4.5rem);
        border-radius: 20px;
        background: #242424;
        border: 1px solid #333;
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06);
        text-align: center;
        transition: all 0.3s ease;
        max-height: 95vh;
        overflow-y: auto;
        animation: fadeIn 0.6s ease-out forwards;
    }

    .avatar-container {
        width: 150px;
        height: 150px;
        margin: 0 auto 2rem;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #333;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        transition: transform 0.3s ease, border-color 0.3s ease;
        animation: fadeIn 0.5s ease-out 0.1s forwards;
        opacity: 0;
    }
    .avatar-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        filter: contrast(1.1) brightness(1.05);
        transition: filter 0.3s ease;
        color: #f0f0f0;
    }

    .tagline {
        margin: 0 0 2.5rem;
        color: #9e9e9e;
        font-size: clamp(1.2rem, 3vw, 1.4rem);
    }

    footer {
        margin-top: 3.2rem;
        color: #9e9e9e;
        font-size: .9rem;
        line-height: 1.6;
        animation: fadeIn 0.6s ease-out forwards;
        opacity: 0;
    }

    .beian-info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: .5rem 1rem;
        margin-top: .5rem;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @media (max-height: 720px) {
        .card {
            max-height: none;
            overflow: visible;
        }
    }
</style>