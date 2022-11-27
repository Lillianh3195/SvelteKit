<script>
	import {
		useForm,
		Hint,
		HintGroup,
		validators,
		required,
		minLength,
		email
	} from 'svelte-use-form';

	const form = useForm();

	const requriedMessage = 'This field is required.';

	function passwordMatch(value, form) {
		if (value != form.values.password) {
			return { passwordMatch: true };
		}
	}
</script>

<main>
	<h1>Login Page</h1>

	<form use:form>
		<label for="email">Email: </label>
		<input type="email" name="email" use:validators={[required, email]} />
		<HintGroup for="email"
			><Hint on="required">{requriedMessage}</Hint>
			<Hint on="email" hideWhenRequiredd>This must be a valid email</Hint>
		</HintGroup><br /> <br />

		<label for="password">Password: </label>
		<input type="password" name="password" use:validators={[required, minLength(5)]} />

		<HintGroup for="password">
			<Hint on="required">{requriedMessage}</Hint>
		</HintGroup><br /> <br />

		<button>Login</button>
	</form>
</main>

<style>
	input {
		background-color: #cbd5e1;
		color: #475569;
		padding: 1em;
		border-radius: 5px;
		border: 1px solid transparent;
		font-family: 'Heebo', sans-serif;
		font-size: 16px;
	}
	button {
		background: #e2e8f0;
		color: #64748b;
		border: unset;
		border-radius: 6px;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
	}
	button:hover {
		background: #cbd5e1;
		color: #475569;
	}
	button:focus {
		background: #94a3b8;
		color: #f1f5f9;
	}
	label {
		position: relative;
	}
	main {
		text-align: center;
	}
</style>
