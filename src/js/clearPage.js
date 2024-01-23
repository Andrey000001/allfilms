import refs from "./refs";
const {cards} = refs

export default function clearPage() {
    cards.innerHTML = '';
}