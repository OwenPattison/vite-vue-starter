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
    setup(props) {
        return () => <h1 class={styles.heading}>{props.name}</h1>;
    },
});
