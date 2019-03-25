<template>
  <section>
	  <h5 class="title is-3">Latest news</h5>
	  <div v-for="record in news" class="news">
		  <div class="news-image">
			  <img :src="require(`@/assets/${record.image}`)" :alt="record.title">
		  </div>
		  <div class="news-content">
				  <h6 class="title is-5 is-marginless">{{record.title}}</h6>
				  <p class="is-size-7">{{record.timestamp}}</p>
				  <p>{{record.text}}</p>
		  </div>
	  </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import INews from '@/common/interfaces/INews';

  interface INewsList {
    news: INews[];
  }

  export default Vue.extend({
    data(): INewsList {
      return {
        news: []
      };
    },
    created(): void {
      this.news = [
        {
          timestamp: 'Mar 20 10:40',
          title: 'Victorious expedition',
          text: 'One of the warriours tells us: \"Hey guys, don\'t listen to all this bullshit about India before you actually get there. They call their food \"maize\" - \"m-a-i-z-e\", not \"rice\", I tell you.\" ',
	        image: 'news1.png'
        },
        {
          timestamp: 'Mar 18 18:00',
          title: 'The British scientists report',
          text: 'Sorry, the report comes in Latin only: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut porttitor orci. Phasellus varius ac mauris id aliquet. Morbi luctus ante ultricies eros rutrum.\"',
          image: 'news2.jpg'
        },
        {
          timestamp: 'Mar 15 12:00',
          title: 'Citizens welcome the new hero',
          text: 'One more glorious entry to the Guinness Book of Records: Olaf Svenson from \"No-axon axolotl\" managed to drink seven pints of Guinness in one minute!',
          image: 'news3.jpg'
        }
      ];
    }
  });
</script>

<style lang="scss" scoped>
	.news {
		margin: 24px 0;
		padding: 12px;
		border: 1px solid grey;
		border-radius: 2px;
		box-shadow: 1px 2px lightgrey;
		display: grid;
		grid-template-areas: "image content";
		grid-template-columns: auto 1fr;
		
		.news-image {
			grid-area: 'image';
			width: 240px;
			height: 180px;
			margin-right: 32px;
			
			img {
				display: block;
				width: 240px;
				height: 180px;
			}
		}
		
		.news-content {
			grid-area: "content";
		}
	}
</style>
