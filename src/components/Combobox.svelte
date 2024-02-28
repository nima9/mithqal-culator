<script lang="ts">
	interface Currency {
		code: string
		name: string
		symbol_native: string
	}
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	import Check from 'lucide-svelte/icons/check'
	import * as Command from '$lib/components/ui/command'
	import * as Popover from '$lib/components/ui/popover'
	import { Button } from '$lib/components/ui/button'
	import { cn } from '$lib/utils'
	import { tick } from 'svelte'
	export let currJson: { [key: string]: Currency } = {}

	let open = false
	let value = ''
	const returnValue = () => {
		dispatch('listenToMe')
	}

	let foundCurrency
	$: foundCurrency = Object.values(currJson).find(
		(c) => c.symbol_native + ' ' + c.code + ' ' + c.name === value
	)
	export let selectedValue
	$: selectedValue = foundCurrency
		? `${foundCurrency.symbol_native} ${foundCurrency.code}`
		: '$ USD'

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false
		tick().then(() => {
			document.getElementById(triggerId)?.focus()
			returnValue()
		})
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="sentence"
			size="sentence"
			role="combobox"
			aria-expanded={open}
			class="appearance-none border-b-4 border-green-800 bg-zinc-800 px-4 text-center text-green-50 outline-none focus:border-green-500 focus:ring-green-500 md:border-b-8"
		>
			<div class="my-1 text-green-50">
				{selectedValue}
			</div>
		</Button>
	</Popover.Trigger>
	<Popover.Content class="container w-[200px] p-0">
		<Command.Root>
			<Command.Input placeholder="Search currency..." />
			<Command.Empty>No currencies found.</Command.Empty>
			<Command.Group>
				{#each Object.values(currJson) as c}
					<Command.Item
						value={c.symbol_native + ' ' + c.code + ' ' + c.name}
						onSelect={(currentValue) => {
							value = currentValue
							closeAndFocusTrigger(ids.trigger)
						}}
					>
						<Check class={cn('mr-2 h-4 w-4 ', value !== c.code && 'text-transparent')} />
						{c.symbol_native + ' ' + c.code}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>