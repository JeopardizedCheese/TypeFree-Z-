<script>
    import Box from "$lib/Box.svelte";
</script>

<svelte:head>
    <title>TextFree(z)e</title>
    <meta name="description" content="ออกตามหาแร่อัญมณีที่สาปสูญในดินแดนไอทีเกมส์" />
</svelte:head>

<main class="min-h-screen font-Kanit relative overflow-x-hidden animate-fade-in">

    <div class="absolute inset-0 bg-[url('/ice-pattern.webp')] opacity-5 pointer-events-none"></div>
    
    <div class="container mx-auto px-4 py-8 relative z-10">
   
        <header class="flex flex-col items-center mb-12">
            <img src="./text.webp" alt="TextFree(z)e Logo" class="w-64 md:w-80 mb-6" />
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-200 text-center mb-4 tracking-wide">
                ราชินีน้ำแข็งได้ปรากฏตัว
            </h1>
            <p class="text-xl md:text-2xl text-amber-200 text-center max-w-3xl">
                จงใช้อาวุธในตำนานทั้ง 4 เพื่อพิชิต
            </p>
        </header>


        <section class="mb-16">
            <div class="flex justify-center">

                <img 
                    src="./main.webp" 
                    alt="ราชินีน้ำแข็ง" 
                    class="max-w-full md:max-w-2xl rounded-lg shadow-2xl transition-all ease-in-out duration-500 hover:scale-110"
                />

            </div>
        </section>

        <section class="mb-16 max-w-4xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold text-amber-200 text-center mb-4">
                ออกตามหาแร่อัญมณีที่สาปสูญในดินแดนไอทีเกมส์
            </h2>

            <p class="text-xl md:text-2xl text-blue-400 font-bold text-center mb-8">
                เพื่อให้อาวุธในตำนานกลับมาใช้ได้อีกครั้ง
            </p>

        </section>

        <section class="mb-20">
            <h2 class="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                อัญมณีในตำนาน
            </h2>
            
            <div class="flex flex-wrap justify-center gap-6">
                <div class="animate-fade-in fade-delay-1">
                  <Box img="./blue.webp" name="Sapphire" ds="แร่แห่งสติปัญญา ความคิด และความอดทน" />
                </div>

                <div class="animate-fade-in fade-delay-2"> 
                  <Box img="./yellow.webp" name="Amber" ds="แร่แห่งพละกำลัง ความแข็งแรงและความโชคดี" />
                </div>

                <div class="animate-fade-in fade-delay-3">
                  <Box img="./red.webp" name="Garnet" ds="แร่แห่งการปกป้องปักรักษา ความรักและความสมปรารถนา" />
                </div>

                <div class="animate-fade-in fade-delay-4">
                  <Box img="./green.webp" name="Aquamarine" ds="แร่แห่งการมีวาทศิลป์ การประณีประนอมและความกล้าหาญ" />
                </div>

            </div>

        </section>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-950 py-4 px-6">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
                <img src="it.png" alt="IT Camp KMITL Logo" class="h-12" />
            </div>
            
            <div class="flex flex-wrap gap-6">
                <a href="https://discord.gg/RWBp9xnP" class="flex items-center text-amber-200 hover:text-amber-400 transition-colors">
                    <img src="./dis.webp" alt="Discord" class="w-5 h-5 mr-2" />
                    <span>Discord</span>
                </a>

                <a href="https://x.com/itcamp?s=11" class="flex items-center text-amber-200 hover:text-amber-400 transition-colors">
                    <img src="./twiter.webp" alt="Twitter" class="w-5 h-5 mr-2" />
                    <span>Twitter</span>
                </a>

                <a href="https://www.instagram.com/itcamp_kmitl?igsh=aXNtNWhlZWVwaGZk" class="flex items-center text-amber-200 hover:text-amber-400 transition-colors">
                    <img src="./ig.webp" alt="Instagram" class="w-5 h-5 mr-2" />
                    <span>Instagram</span>
                </a>

                <a href="https://www.facebook.com/share/1GvYVN8d2E/?mibextid=LQQJ4d" class="flex items-center text-amber-200 hover:text-amber-400 transition-colors">
                    <img src="./face.webp" alt="Facebook" class="w-5 h-5 mr-2" />
                    <span>Facebook</span>
                </a>

            </div>
        </div>
    </footer>
</main>