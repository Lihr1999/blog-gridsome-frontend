<template>
  <Layout>
    <!-- Page Header-->
    <!-- /就能访问到项目的根路径 -->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(${GRIDSOME_API_URL + general.cover.url})`,
      }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            class="post-preview"
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
          >
            <g-link :to="'/post/' + edge.node.id">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <!-- <a href="#!">{{ edge.node.created_by.firstname + edge.node.created_by.lastname }}</a> -->
              on {{ edge.node.created_at }}
            </p>
            <p>
              <span v-for="tag in edge.node.tags" :key="tag.id">
                <g-link :to="'/tag/' + edge.node.id">{{ tag.title }}</g-link>
                &nbsp; &nbsp;
              </span>
            </p>
            <hr class="my-4" />
          </div>
          <!-- Divider-->
          <!-- <hr class="my-4" /> -->
          <!-- Post preview-->
          <!-- <div class="post-preview">
            <a href="post.html"
              ><h2 class="post-title">
                I believe every human has a finite number of heartbeats. I don't
                intend to waste any of mine.
              </h2></a
            >
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on September 18, 2022
            </p>
          </div> -->
          <!-- Divider-->
          <!-- <hr class="my-4" /> -->
          <!-- Post preview-->
          <!-- <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">Science has not yet mastered prophecy</h2>
              <h3 class="post-subtitle">
                We predict too much for the next year and yet far too little for
                the next ten.
              </h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on August 24, 2022
            </p>
          </div> -->
          <!-- Divider-->
          <!-- <hr class="my-4" /> -->
          <!-- Post preview-->
          <!-- <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">Failure is not an option</h2>
              <h3 class="post-subtitle">
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on July 8, 2022
            </p>
          </div> -->
          <!-- Divider-->
          <!-- <hr class="my-4" /> -->
          <!-- Pager-->
          <!-- <div class="d-flex justify-content-end mb-4">
            <a class="btn btn-primary text-uppercase" href="#!"
              >Older Posts →</a
            >
          </div> -->
          <Pager :info="$page.posts.pageInfo" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($page: Int) {
  posts: allStrapiPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        # created_by {
        #   id
        #   firstname
        #   lastname
        # }
        tags {
          id
          title
        }
        created_at
      }
    }
  }
  
  allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle 
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  name: "HomePage",
  components: { Pager },
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    general() {
      return this.$page.allStrapiGeneral.edges[0].node;
    },
  },
};
</script>

<style></style>
