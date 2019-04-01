<template>
<div class="container">
    <h1 class="title is-3">Skills</h1>
    <div class="field is-grouped">
        <div class="control is-expanded">
            <div class="select">
                <select>
					<option>Select craft</option>
					<option v-for="technology in technologies" :key="technology.id">{{technology.name}}</option>
				</select>
            </div>
        </div>
        <div class="control is-expanded">
            <div class="select">
                <select>
					<option>Select category</option>
					<option v-for="(category, index) in categories" :key="index">{{category}}</option>
				</select>
            </div>
        </div>
        <p class="control is-expanded"><input class="input" type="text" placeholder="Search by skill name"></p>
        <p class="control is-expanded"><input class="input" type="text" placeholder="Search by tags"></p>
        <p class="control"><a class="button is-info"><span class="icon is-small"><i class="fas fa-search" aria-hidden="true"></i></span></a></p>
        <p class="control"><a class="button is-light"><span class="icon is-small"><i class="fas fa-times" aria-hidden="true"></i></span></a></p>
    </div>
    <SkillsTable />
    <Pagination />
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SkillsTable from '@/components/skills/SkillsTable.vue';
import Pagination from '@/components/common/Pagination.vue';
import {ITechnologyShort} from '@/common/interfaces/ITechnologyShort';

interface ISkillsData {
    technologies: ITechnologyShort[],
    categories: String[]
}

export default Vue.extend({
    components: {
        SkillsTable,
        Pagination
    },
    data(): ISkillsData {
        return {
            technologies: [],
            categories: []
        }
    },
    created(): void {
        this.technologies = [
			{
                id: 'fight',
                name: 'Fight'
            },
            {
                id: 'feast',
                name: 'Feast'
            },
            {
                id: 'fix',
                name: 'Fix'
            }
        ];
        this.categories = ['Melee', 'Archery', 'Cookery', 'Brewery'];
    }
});
</script>
