<template>
	<section class="subscribe">
		<div class="inner__subscribe">
			<h6 class="heading--sub">35,000+ already joined</h6>
			<p class="description--sub">Stay up-to-date with what we’re doing</p>
			<form 
      class="form" 
      @submit="onSubmit"
      :errors="errors"
      >
				<div 
        class="form__group"
        :class="{'form__group--err': errors.email}"
        >
					<label for="email"></label>
					<input
						type="email"
						class="form__control"
						id="email"
            name="email"
            v-model="email"
						placeholder="Enter your email address"
					/>
					<img
						src="@/assets/icon-error.svg"
						alt="an exclamation mark"
						class="form__err__icon"
            v-if="errors.email"
					/>
					<p class="form__err__msg">
						{{ errors.email }}
					</p>
				</div>
				<!-- <input type="submit" value="Contact Us" class="submitBtn" /> -->
				<button class="submitBtn">Contact Us</button>
			</form>
		</div>
	</section>
</template>

<script>
import { useField, useForm } from "vee-validate";
import { object, email, string } from "yup";
export default {
  setup() {
    const schema = object({
      email: string().required("Whoops, make sure it's an email").email()
    })

    const { handleSubmit, errors } = useForm({
      validationSchema: schema
    })

    const { value: email } = useField('email');

    const onSubmit = handleSubmit((values) => {
      console.log(values);
    })
    return {
      onSubmit,
      errors,
      email
    };
	},
};
</script>

<style lang="scss" scoped></style>
