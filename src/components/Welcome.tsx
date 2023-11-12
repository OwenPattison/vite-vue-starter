import { defineComponent } from 'vue';
import styles from './Welcome.module.css'

export const Welcome = defineComponent({
    name: 'Title',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup({ name }) {
        return () => <h1 class={styles.heading}>Hello {name}!</h1>;
    },
});
