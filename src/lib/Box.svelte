<script>
    let {img="#", name="ชื่อแร่", ds="des" }=$props()
</script>

<div class="flex flex-col items-center bg-gray-900 w-64 p-6 rounded-2xl border-2 border-amber-200/3 shadow-lg transform transition-all duration-300 hover:scale-105 hover:border-amber-200">

    <img src={img} alt="IMG" class="w-28 h-28 object-contain mb-4" />
    <h3 class="text-white text-2xl font-bold mb-1">{name}</h3>
    <p class="text-lg text-amber-200 mb-4">TextFree(z)</p>

    <p class="text-white text-center mb-6 overflow-y-auto h-24">
        {ds}
    </p>

    <a href="/pages" class="w-full block">
     <button class="w-full bg-white text-emerald-700 font-bold text-lg rounded-xl py-3 transition-all duration-300 hover:bg-amber-200">ออกตามหาอัญมณีเลย!</button>
    </a>
    
</div>