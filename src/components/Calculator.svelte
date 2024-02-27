<script>
	import metals from '../api/metals.json'
	import currencies from '../api/currencies.json'
	const mithqalWeight = 0.11708222222 //1 mithqal in troy ounces
	let amount = '19'
	let metal = 'Gold'
	let currency = '$ USD'
	let answer = 0
	let displayAnswer = ''
	let metalDate = new Date(metals.timestamps.metal.toString())
	let currDate = new Date(metals.timestamps.currency.toString())
	$: answerDataTip = 'Click to copy'

	function handleAmountInputNumbers(event) {
		const value = event.target.value
		const validValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
		if (value !== validValue) {
			amount = validValue
		}
	}

	function doMath() {
		const ISOLetters = currency.slice(-3).toUpperCase().trim()
		const symbol = currencies[ISOLetters].symbol_native
		const metalValue = metals.metals[metal.toLowerCase().trim()]
		const currencyValue = metals.currencies[ISOLetters]
		const calculation = mithqalWeight * amount * (metalValue / currencyValue)
		answer = calculation
			.toFixed(2)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

		displayAnswer = isNaN(calculation) ? '' : symbol + ' ' + answer
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

<div
	class="container mx-auto flex appearance-none flex-wrap items-center justify-center space-x-0 px-6 pt-36 text-3xl font-medium text-green-50 md:container sm:text-4xl md:mx-auto md:text-5xl lg:text-6xl"
>
	<form>
		<input
			autocomplete="off"
			type="text"
			bind:value={amount}
			on:input={handleAmountInputNumbers}
			on:input={doMath}
			class="inline-block w-9 appearance-none flex-wrap border-b-4 pt-1 text-center text-gray-900 focus:border-green-500 focus:ring-green-500 sm:w-14 md:w-20 lg:w-28 dark:border-green-800 dark:bg-zinc-800 dark:text-green-50 dark:outline-none dark:outline-offset-1"
			id="amount"
			name="amount"
			on:input={(e) => (e.target.style.width = e.target.value.length + 1 + 'ch')}
		/>
		<label
			for="metals"
			class="tooltip flex-warp px-3 font-medium text-green-50"
			data-tip="1 Mithqál = 3.642g"
			>Mithqál of
		</label>
		<input
			autocomplete="off"
			aria-autocomplete="none"
			class="w-20 appearance-none border-b-4 pt-1 text-center text-gray-900 focus:border-green-500 focus:ring-green-500 sm:w-24 md:w-32 lg:w-36 dark:border-green-800 dark:bg-zinc-800 dark:text-green-50 dark:outline-none dark:outline-offset-1"
			list="metals"
			required
			bind:value={metal}
			on:input={doMath}
			on:input={(e) =>
				(e.target.style.width =
					e.target.value.length + 1 < 1 ? '1ch' : e.target.value.length + 1 + 'ch')}
		/>
		<datalist id="metals">
			<option class="text-l" value="Gold"> </option>
			<option class="text-l" value="Silver"> </option>
		</datalist>
		in
		<input
			autocomplete="off"
			aria-autocomplete="none"
			class="w-28 appearance-none border-b-4 pt-1 text-center text-gray-900 focus:border-green-500 focus:ring-green-500 sm:w-32 md:w-40 lg:w-48 dark:border-green-800 dark:bg-zinc-800 dark:text-green-50 dark:outline-none dark:outline-offset-1"
			list="curr"
			required
			bind:value={currency}
			on:input={doMath}
			on:input={(e) =>
				(e.target.style.width =
					e.target.value.length + 1 < 1 ? '1ch' : e.target.value.length + 1 + 'ch')}
		/>
		<datalist id="curr">
			{#each Object.values(currencies) as c}
				<option class="text-l" value="{c.symbol_native} {c.code}"> </option>
			{/each}
		</datalist>
		is:
	</form>
</div>

<br />
<div
	class="flex flex-wrap items-center justify-center pb-9 pt-16 text-6xl text-green-300 sm:text-7xl md:text-8xl lg:text-9xl"
>
	<button
		class="btn-ghost tooltip tooltip-bottom hover:bg-transparent"
		data-tip={answerDataTip}
		on:click={() => {
			navigator.clipboard.writeText(answer)
		}}
		on:click={() => {
			answerDataTip = 'Copied!'
		}}
		on:mouseleave={() => {
			setTimeout(() => {
				answerDataTip = 'Click to copy'
			}, 300)
		}}
	>
		{displayAnswer}
	</button>
</div>

<div
	class="flex flex-wrap items-center justify-end px-7 pb-1 pt-24 text-gray-500 sm:mr-48 md:mr-24 lg:mr-12"
>
	Metal values as of: {readableMetalDate}
</div>
<div
	class="flex flex-wrap items-center justify-end px-7 py-1 text-gray-500 sm:mr-48 md:mr-24 lg:mr-12"
>
	Currency values as of: {readableCurrDate}
</div>
