<script>
  import MarkdownIt from 'markdown-it';

  const md = new MarkdownIt();

  export let data;
</script>
<div class="l-section">
  <div class="l-main-wrap">
    <header class="content-headline">
      <h2>Teaser-Box</h2>
      <p class="content-headline__subheader">
        3 columns
      </p>
    </header>
    <div class="teaser-box-wrap grid-container grid-container--1-per-row grid-container--s--3-per-row">
      {#each data.items as item, index}
        <div class="teaser-box" key={'teaserboxitem-'+index}>
          <div class="teaser-box__item" data-component="base.teaser-box">
            <img src={item.image} alt="" class="teaser-box__item__image" />
            <div class="teaser-box__item__box">
              <div class="teaser-box__text">
                <p class="teaser-box__topic">{item.topic}</p>
                {@html md.render(item.text)}
              </div>
              <div class="teaser-box__link">
                <a href={item.href} class="button button--solid">{item['link-button-text']}</a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
