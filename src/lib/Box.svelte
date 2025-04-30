<script>
    let {img="#", name="ชื่อแร่", ds="des" }=$props()
</script>
<div
    class="box bg-gray-600 w-[300px]  p-10 m-10 rounded-4xl">
    <img src={img} alt="IMG" class="" />
    <p class="text-white text-2xl">{name}</p>
    <p class="text-xl text-amber-200">TextFree(z)</p>
    <p class="text-white text-xl pb-2 ">
        {ds}
    </p>
    <a href="/pages">
     <button class="bg-white text-emerald-700 text-xl rounded-4xl h-16 p-2.5 hover:bg-amber-200 ">ออกตามหาอัญมณีเลย!</button>
    </a>
    
</div>