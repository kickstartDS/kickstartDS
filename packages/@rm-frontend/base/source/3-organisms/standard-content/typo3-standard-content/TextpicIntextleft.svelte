<script>
  import MarkdownIt from 'markdown-it';

  const md = new MarkdownIt();

  export let data;
</script>

<div class="l-section ">
    <div class="l-main-wrap">
      <header class="content-headline">
          <h2>{data.headline.mainheader}</h2>
          <p class="content-headline__subheader">
              {data.headline.subheader}
          </p>
      </header>
      <div class="textpic textpic--intext textpic--nowrap textpic--left">
          <div class="gallery" data-columns="1" data-images="1">
              <div class="gallery__row">
                  <div class="gallery__column">
                      <figure>
                          <img src={data.textpic.image} alt="" width="" height="" />
                          {#if data.textpic.caption}
                              <figcaption>{data.textpic.caption}</figcaption>
                          {/if}
                      </figure>
                  </div>
              </div>
          </div>
          <div class="bodytext">
              <p>{@html md.render(data.content)}</p>
          </div>
      </div>
    </div>
</div>
