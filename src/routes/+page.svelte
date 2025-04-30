<script>
    import Box from "$lib/Box.svelte";
</script>

<head>
    <title>TextFree(z)e</title>
</head>
<div class="mx-auto container w-screen h-full relative font-Kanit">
    <div class=" w-full justify-center ">
        <div class=" w-full  text-amber-200 justify-center">
            <img src="./text.webp" alt="" class="w-80 mx-auto" />
            <p class=" font-bold font text-5xl text-center ">
                ราชินีน้ำแข็งได้ปรากฏตัว
            </p>
            <p class="text-2xl text-center ">
                จงใช้อาวุธในตำนานทั้ง 4 เพื่อพิชิต
            </p>
        </div>
        
    </div>

    <div class="w-full flex justify-center ">
        <img src="./main.webp" alt="">
    </div>

    <div class=" text-4xl font-bold ps-5 pe-5 w-full text-center h-full  ">
        <div>
            <p class=" text-amber-200 font-bold">
                ออกตามหาแร่อัญมณีที่สาปสูญในดินแดนไอทีเกมส์เพื่อให้อาวุธในตำนานกลับมาใช้ได้อีกครั้ง
            </p>
            <p class="text-blue-400 font-bold mt-2.5">
                เพื่อให้อาวุธในตำนานกลับมาใช้ได้อีกครั้ง
            </p>
        </div>
        
        <!-- BOX -->
        <div class="grid grid-cols-4 gap-2.5 grid-rows-1">
            <Box img="./blue.webp" name="Sapphire" ds="แร่แห่งสติปัญญา ความคิด และความอดทน"/>
            <Box img="./yellow.webp" name="Amber" ds="แร่แห่งพละกำลัง ความแข็งแรงและความโชคดี"/>
            <Box img="./red.webp" name="Garnet" ds="แร่แห่งการปกป้องปักรักษา ความรักและความสมปรารถนา "/>
            <Box img="./green.webp" name="Aquamarine" ds="แร่แห่งการมีวาทศิลป์ การประณีประนอมและความกล้าหาญ"/>
        </div>
        <!-- END BOX -->

    </div>

    <footer class="absolute bottom-0 w-full flex justify-between m-3">

        <ul>
            <img src="it.png" alt="" class="w-50">
        </ul>

        <ul class="flex gap-2 text-amber-200 ">
            <li class=" inline-flex hover:text-amber-400">
                <img src="./dis.webp" alt="" class="w-5" />
                <a href="https://discord.gg/RWBp9xnP">
                    <p class="">Discord</p>
                </a>
            </li>
            <li class=" inline-flex hover:text-amber-400">
                <img src="./twiter.webp" alt="" class="w-5" />
                <a href="https://x.com/itcamp?s=11">
                    <p>Twitter</p>
                </a>
            </li>
            <li class=" inline-flex hover:text-amber-400">
                <img src="./ig.webp" alt="" class="w-5" />
                <a
                    href="https://www.instagram.com/itcamp_kmitl?igsh=aXNtNWhlZWVwaGZk"
                >
                    <p>Instargram</p>
                </a>
            </li>
            <li class=" inline-flex hover:text-amber-400">
                <img src="./face.webp" alt="" class="w-5" />
                <a
                    href="https://www.facebook.com/share/1GvYVN8d2E/?mibextid=LQQJ4d"
                >
                    <p>Facebook</p>
                </a>
            </li>
        </ul>
    </footer>

</div>