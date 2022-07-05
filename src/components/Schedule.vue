<template>
    <div id="schedule">
        <header>
            <nav id="firstLine">
                <a href="#">Mês</a>
                <a href="#">Semana</a>
                <a href="#">Dia</a>
            </nav>
            <div id="week">
                <p>Semana 47 (nov 2020)</p>
            </div>
        </header>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>D 15</th>
                        <th>S 16</th>
                        <th>T 17</th>
                        <th>Q 18</th>
                        <th>Q 19</th>
                        <th>S 20</th>
                        <th>S 21</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event of events" :key="event.id">
                        <td class="busy">
                                {{event.name}}<br>
                        {{event.start}} - {{event.end}}
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
</template>
<script>
import Event from '@/services/event';

export default {
    name: 'ScheduleHome',
    data() {
        return {
            events: []
        }
    },
    mounted() {
        Event.getAll().then(response => {
            this.events = response.data;
        });
    }
}
</script>
<style>
</style>