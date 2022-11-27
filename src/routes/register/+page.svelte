
<script>
    import { useForm, Hint, HintGroup, validators, required, minLength, email } from "svelte-use-form";

    const form = useForm();

    const requriedMessage = "This field is required."

    function passwordMatch(value, form) {
        if (value != form.values.password) {
            return { passwordMatch: true};
        }
    }
</script>

<main>
    <h1>Register Page</h1>

    <form use:form>
        <label for="email">Email: </label>
        <input type="email" name="email" use:validators={[required, email]} />
        <HintGroup for="email"><Hint on="required">{requriedMessage}
        </Hint>
        <Hint on="email" hideWhenRequiredd>This must be a valid email</Hint>
        </HintGroup><br /> <br />

        <label for="name">Name: </label>
        <input type="text" name="name" /><br /> <br />

        <label for="password">Password: </label>
        <input type="password" name="password" use:validators={[required, minLength(5)]}/>

        <HintGroup for="password">
            <Hint on="required">{requriedMessage}</Hint>
        </HintGroup><br /> <br />

        <HintGroup for="passwordConfirmation">
        <label for="passwordConfirmation">Password Conformation: </label>
        <input type="passwordConfirmation" use:validators={[required, passwordMatch]}/>
        <Hint on="passwordConfirmation" hideWhenRequired>Passwords do not match</Hint>
        </HintGroup><br /> <br />

        <button>Submit</button>
    </form>
</main>

<style>
input {
		background-color: #CBD5E1;
		color:#475569;
		padding: 1em;
		border-radius: 5px;
		border: 1px solid transparent;
		font-family: 'Heebo', sans-serif;
		font-size: 16px;
}
button {
		background: #E2E8F0;
		color: #64748B;
		border: unset;
		border-radius: 6px;
		padding: .75rem 1.5rem;
		cursor: pointer;
	}
button:hover {
	background: #CBD5E1;
	color: #475569;
}
button:focus {
	background: #94A3B8;
	color: #F1F5F9;
}
label {
	position: relative;
}	
main {
    text-align: center;
}
</style>