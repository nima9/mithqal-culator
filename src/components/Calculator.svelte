<script>
	import metals from '../api/metals.json'
</script>

<div
	class="flex-warp flex items-center justify-center pt-36 text-2xl font-medium text-black sm:text-3xl md:text-4xl"
>
	<input
		autocomplete="off"
		type="number"
		class="text-l block w-1/12 rounded-lg border-4 p-2.5 text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-transparent dark:bg-zinc-700 dark:text-green-50 dark:outline-none dark:outline-offset-1 dark:focus:border-green-800"
		id="amount"
		name="amount"
		min="0"
		value="19"
	/>
	<div class="px-3 text-2xl font-medium text-green-50 sm:text-3xl md:text-4xl">of 'GOLD' in</div>
	<input
		autocomplete="off"
		aria-autocomplete="none"
		class="text-l block w-1/12 rounded-lg border-4 p-2.5 text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-transparent dark:bg-zinc-700 dark:text-green-50 dark:outline-none dark:outline-offset-1 dark:focus:border-green-800"
		list="curr"
		required
		value="USD $"
	/>
	<datalist id="curr">
		<option class="text-l" value="$ USD"> </option>
		<option class="text-l" value="$ CAD"> </option>
		<option class="text-l" value="¥ YEN "> </option>
	</datalist>
	<div class="px-3 text-2xl font-medium text-white sm:text-3xl md:text-4xl">is:</div>
</div>
<br />
<div class="flex items-center justify-center pt-36 text-6xl text-green-50 sm:text-7xl md:text-8xl">
	{metals.metals.gold}
</div>
