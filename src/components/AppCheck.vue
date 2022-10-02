<template>
	<label
		class="checkbox"
		:class="{
		    disabled: disabled,
			checked: value || checked,
		}"
	>
		<slot />
		<input type="checkbox" @change="change" :checked="value || checked" />
		<span class="checkmark">
			<i
				v-if="(value || checked)"
				class="isax isax-tick-square5"
			>O</i>
		</span>
	</label>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false,
		},
		checked: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		change(e) {
			if (!this.disabled) {
				this.$emit('click')
				this.$emit('input', e.target.checked)
				this.$emit('change', e.target.checked)
			}
		},
	},
}
</script>