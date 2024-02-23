<script>
	import metals from '../api/metals.json'
	let amount = '19'

	function handleAmountInputNumbers(event) {
		const value = event.target.value
		const validValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
		if (value !== validValue) {
			amount = validValue
		}
	}
</script>

<form
	class="flex-warp flex items-center justify-center pt-36 text-5xl text-green-50 font-medium sm:text-6xl md:text-7xl"
>
	<input
		autocomplete="off"
		type="text"
		bind:value={amount}
		on:input={handleAmountInputNumbers}
		class="appearance-none flex w-28 text-center border-b-4 pt-1 text-gray-900 focus:border-green-500 focus:ring-green-500 dark:bg-zinc-800 dark:text-green-50 dark:outline-none dark:outline-offset-1 dark:border-green-800"
		id="amount"
		name="amount"
		on:input={(e) => (e.target.style.width = e.target.value.length + 1 + 'ch')}
	/>
	<label for="metals" class="px-3 font-medium text-green-50">Mithqál of </label>
	<input
		autocomplete="off"
		aria-autocomplete="none"
		class="appearance-none w-52 text-center border-b-4 pt-1 mx-4 text-gray-900 focus:border-green-500 focus:ring-green-500 dark:bg-zinc-800 dark:text-green-50 dark:outline-none dark:outline-offset-1 dark:border-green-800"
		list="metals"
		required
		value="Gold"
		on:input={(e) => (e.target.style.width = e.target.value.length + 1 + 'ch')}
	/>
	<datalist id="metals">
		<option class="text-l" value="Gold"> </option>
		<option class="text-l" value="Silver"> </option>
	</datalist>
	in
	<input
		autocomplete="off"
		aria-autocomplete="none"
		class="appearance-none w-72 border-b-4 pt-1 mx-4 text-center text-gray-900 focus:border-green-500 focus:ring-green-500 dark:bg-zinc-800 dark:text-green-50 dark:outline-none dark:outline-offset-1 dark:border-green-800"
		list="curr"
		required
		value="$ USD"
		on:input={(e) => (e.target.style.width = e.target.value.length + 1 + 'ch')}
	/>
	<datalist id="curr">
		<option class="text-l" value="$ USD"> </option>
		<option class="text-l" value="$ CAD"> </option>
		<option class="text-l" value="¥ YEN "> </option>
	</datalist>
	is:
</form>
<br />
<div class="flex items-center justify-center pt-36 text-5xl text-green-50 sm:text-7xl md:text-9xl">
	{metals.metals.gold}
	{#if amount !== null}
		{amount}
	{/if}
</div>

<style>
</style>
