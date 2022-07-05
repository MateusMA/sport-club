<template>
    <div>
        <h2 id="subTittle">Criação de atividade esportiva</h2>
        <form id='eventForm' oninput="n.value = parseInt(numberWeek.value)" @submit.prevent="save">
            <label>Evento</label>
            <input class="textBox" id="eventName" name="eventName" v-model="event.name" />
            <label>Descrição</label>
            <textarea class="textBox" rows="1" cols="100" maxlength="200" name="description"
                v-model="event.description">
            </textarea>
            <div id="boxDay">
                <label>De:</label>
                <input class="textBox" id="textDay" placeholder="2022-05-07" name="day" v-model="event.day" />
                <div id="leftContent">
                    <div class="spaceDate">
                        <label>Início:</label>
                        <select class="option" name="startDate" id="startDate" v-model="event.start">
                            <option>Select</option>
                            <option>08:00</option>
                            <option></option>
                        </select>
                    </div>
                    <div class="spaceDate">
                        <label>Término:</label>
                        <select class="option" name="endDate" id="endDate" v-model="event.end">
                            <option>Select</option>
                            <option>18:00</option>
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="spaceRadio">
                <input type="radio" id="notRepeat" name="repetition" value="notRepeat" />
                <label for="notRepeat">Não se repete</label>
                <input type="radio" id="repeat" name="repetition" value="repeat" />
                <label for="repeat">Repetir</label>
            </div>
            <div class="formSubmit">
                <label>Intervalo de semanas:</label>
                <output name="n" for="numberWeek" value="1"></output>
                <input type="range" min="1" max="4" name="numberWeek" v-model="event.recurrence" />
                <input id="buttonSubmit" type="submit" value="Salvar" />
            </div>
        </form>
    </div>
</template>

<script>
import Event from '@/services/event';

export default {
    name: 'RegisterForm',
    data() {
        return {
            event: {
                name: '',
                description: '',
                day: '',
                start: '',
                end: '',
                recurrence: ''
            }
        }
    },
    methods: {
        save() {
            Event.toSave(this.event).then(response => {
                return response;
            });
        }
    }
};
</script>
