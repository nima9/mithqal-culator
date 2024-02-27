<script>
	import metals from '../api/metals.json'
	import currencies from '../api/currencies.json'
	const mithqalWeight = 0.1170822 //1 mithqal in troy ounces
	let amount = '19'
	let metal = 'Gold'
	let currency = '$ USD'
	let answer = 0
	let metalDate = new Date(metals.timestamps.metal.toString())
	let currDate = new Date(metals.timestamps.currency.toString())

	function handleAmountInputNumbers(event) {
		const value = event.target.value
		const validValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
		if (value !== validValue) {
			amount = validValue
		}
	}

	function doMath() {
		const lastLetters = currency.slice(-3)
		const metalValue = metals.metals[metal.toLowerCase().trim()]
		const currencyValue = metals.currencies[lastLetters.toUpperCase().trim()]
		const calculation = mithqalWeight * amount * (metalValue / currencyValue)
		answer = calculation
			.toFixed(2)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	const dateOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZone: 'America/Los_Angeles',
		timeZoneName: 'short',
	}
	doMath()

	const readableMetalDate = new Intl.DateTimeFormat('en-US', dateOptions).format(metalDate)
	const readableCurrDate = new Intl.DateTimeFormat('en-US', dateOptions).format(currDate)
</script>

<form
	class="flex-warp flex items-center justify-center pt-36 text-5xl text-green-50 font-medium sm:text-6xl md:text-7xl"
>
	<input
		autocomplete="off"
		type="text"
		bind:value={amount}
		on:input={handleAmountInputNumbers}
		on:input={doMath}
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
		bind:value={metal}
		on:input={doMath}
		on:input={(e) =>
			(e.target.style.width =
				e.target.value.length + 1 < 5 ? '5ch' : e.target.value.length + 1 + 'ch')}
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
		bind:value={currency}
		on:input={doMath}
		on:input={(e) =>
			(e.target.style.width =
				e.target.value.length + 1 < 5 ? '5ch' : e.target.value.length + 1 + 'ch')}
	/>
	<datalist id="curr">
		{#each Object.values(currencies) as c}
			<option class="text-l" value="{c.symbol_native} {c.code}"> </option>
		{/each}
	</datalist>
	is:
</form>
<br />
<div class="flex items-center justify-center pt-36 text-5xl text-green-300 sm:text-7xl md:text-9xl">
	{#if answer !== null}
		{answer}
	{/if}
</div>
<br />
<div class="flex items-center justify-end text-gray-500 mr-96">
	Metal values as of: {readableMetalDate}
</div>
<div class="flex items-center justify-end text-gray-500 mr-96">
	Currency values as of: {readableCurrDate}
</div>
