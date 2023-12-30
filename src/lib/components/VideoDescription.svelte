<script lang="ts">
    let showMore = false
</script>

<div
  class:h-fit={showMore}
  class:h-[105px]={!showMore}
  class="bg-gray-200 group mb-5 relative overflow-hidden text-sm rounded-lg hover:bg-gray-300 p-3"
>
    <div class="font-medium mb-2">
        <span>10,000 views . 20-11-2023</span>
    </div>
    <p class="mb-5">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellat fugit. Sunt impedit facilis corporis officiis adipisci quo magnam ipsa sequi sapiente eligendi. Laboriosam sint praesentium officiis debitis numquam! Ratione atque esse veniam fugit consequatur quam est inventore nostrum dolores molestias eaque harum voluptates cupiditate expedita obcaecati nisi quis tempora soluta, sunt ad voluptate temporibus aliquid optio! Laudantium velit voluptatum totam accusamus fuga earum repellendus illo tempora laborum, quis maxime autem nam quisquam. Ab deleniti et eum fugiat dolorem voluptas modi a accusamus cumque. Laudantium atque debitis autem vero molestiae alias reiciendis, odit facilis ratione nostrum quam ea necessitatibus labore!
    </p>
    <button
    class="absolute bottom-1 group-hover:bg-gray-300 right-1 bg-gray-200 capitalize font-medium p-1"
    on:click={() => {
      showMore = !showMore;
    }}>show {showMore ? "less" : "more"}</button
  >
</div>
