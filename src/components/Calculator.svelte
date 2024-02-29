<script>
	import metals from '../api/metals.json'
	import currencies from '../api/currencies.json'
	import CurrencyCB from './Combobox.svelte'

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

	const doMath = () => {
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

	function switchMetal() {
		metal = metal === 'Gold' ? 'Silver' : 'Gold'
	}
	doMath()

	const readableMetalDate = new Intl.DateTimeFormat('en-US', dateOptions).format(metalDate)
	const readableCurrDate = new Intl.DateTimeFormat('en-US', dateOptions).format(currDate)
</script>

<div
	class="flex appearance-none flex-wrap items-center justify-center space-x-0 bg-zinc-800 text-3xl font-medium text-green-50 sm:text-4xl md:mx-auto md:text-5xl lg:text-6xl"
>
	<form>
		<input
			autocomplete="off"
			type="text"
			bind:value={amount}
			on:input={handleAmountInputNumbers}
			on:input={doMath}
			class="my-1 w-14 appearance-none flex-wrap items-center justify-center border-b-4 border-green-800 bg-zinc-800 text-center text-green-50 outline-none focus:border-green-500 focus:ring-green-500 sm:w-14 md:w-20 md:border-b-8 lg:w-24"
			id="amount"
			name="amount"
			on:input={(e) => (e.target.style.width = e.target.value.length + 1 + 'ch')}
		/>

		<label
			for="metals"
			class="flex-warp tooltip pr-4 font-medium text-green-50"
			data-tip="1 Mithqál = 3.642g"
			>{#if amount > 1}
				Mithqáls
			{:else}
				Mithqál
			{/if}of
		</label>
	</form>

	<button
		autocomplete="off"
		class="appearance-none border-b-4 border-green-800 bg-zinc-800 px-4 text-center text-green-50 outline-none focus:border-green-500 focus:ring-green-500 md:border-b-8"
		required
		on:click={switchMetal}
		on:click={doMath}
	>
		<div class="my-1">{metal}</div>
	</button>
	<div class="px-4">in</div>
	<CurrencyCB currJson={currencies} bind:selectedValue={currency} on:listenToMe={doMath} />

	<!-- <input
			autocomplete="off"
			aria-autocomplete="none"
			class="w-28 appearance-none border-b-4 border-green-800 bg-zinc-800 pt-1 text-center text-green-50 outline-none outline-offset-1 focus:border-green-500 focus:ring-green-500 sm:w-32 md:w-40 lg:w-48"
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
		is: -->
</div>

<br />
<div
	class="flex flex-wrap items-center justify-center pb-9 pt-16 text-6xl text-green-300 sm:text-7xl md:text-8xl lg:text-9xl"
>
	<button
		class="tooltip tooltip-bottom hover:bg-transparent"
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
