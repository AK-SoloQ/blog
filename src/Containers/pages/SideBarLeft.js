import React from 'react'

function SideBarLeft ({ handlerPageSelect, name, content }) {
  return (
    <div className='container'>
      <ol className='breadcrumb'>
        <li>
          <a onClick={() => { handlerPageSelect('Home') }} >Home</a>
        </li>
        <li className='active'>{name}</li>
      </ol>

      <div className='row'>
        {/* <!-- Sidebar --> */}
        <aside className='col-md-4 sidebar sidebar-left'>
          <div className='row widget'>
            <div className='col-xs-12'>
              <h4>Plan</h4>
              <ul class='list-unstyled list-spaces'>
                { content.plans.map((plan, index) => {
                  return (
                    <li key={index}>
                      <h6>{plan}</h6>
                    </li>
                  )
                })}

              </ul>
            </div>
          </div>
          <div className='row widget'>
            {content.images.map((image, index) => {
              return (
                <div className='col-xs-12' key={index}>
                  <h4>{image.title}</h4>
                  <p>
                    <img src={image.path} alt={image.title} />
                  </p>
                </div>
              )
            })}

          </div>
        </aside>
        {/* <!-- /Sidebar --> */}

        {/* <!-- Article main content --> */}
        <article className='col-md-8 maincontent'>
          <header className='page-header'>
            <h1 className='page-title'>
              {content.title}
            </h1>
          </header>
          <p>
            {content.intro}
          </p>
          <p>
            Consectetur cupiditate labore repudiandae beatae nisi fugiat facilis
            natus illum vitae doloremque. In, perspiciatis, natus, impedit
            voluptas itaque odio repudiandae placeat nisi totam repellendus
            earum dolores mollitia tempore quasi beatae alias cum dicta maxime
            laborum corporis harum porro magnam laboriosam.
          </p>
          <p>
            Aut, eaque, minus atque alias odio mollitia cum nisi ipsa nulla
            natus quae minima similique ipsam aspernatur molestias animi in
            deleniti nam. Tempora, labore, modi eum perspiciatis doloremque
            sequi nam illo corporis iusto maiores nisi recusandae repellat animi
            reiciendis accusamus.
          </p>

          <h2 id='1'>A, quibusdam, nobis, eveniet consequatur</h2>
          <p>
            A, quibusdam, nobis, eveniet consequatur alias doloremque officia
            blanditiis fuga et numquam labore reiciendis voluptas quis repellat
            quos sunt non dolore consectetur at sit nam tenetur dolorem? Harum,
            quas, sit perspiciatis esse odit temporibus aperiam nulla aspernatur
            sequi fugiat tempore?
          </p>
          <p>
            Ad velit consequuntur quo qui odit quam sapiente repudiandae et ea
            pariatur? Ex sapiente beatae nobis consectetur ea. Deleniti, beatae,
            magnam, dolorum, fuga nostrum quas laboriosam sapiente temporibus
            enim voluptates ullam impedit atque quae provident quos mollitia
            aperiam perferendis amet.
          </p>

          <blockquote>
            Numquam, ut iure quia facere totam quas odit illo incidunt.
            Voluptatem, nostrum, ex, quasi incidunt similique cum maxime
            expedita unde labore inventore excepturi veniam corporis sequi
            facere ullam voluptates amet illum quam fuga voluptatibus ipsum
            atque sunt eos. Ut, necessitatibus.
          </blockquote>
          <p>
            Odit, laudantium, dolores, natus distinctio labore voluptates in
            inventore quasi qui nobis quis adipisci fugit id! Aliquam alias ea
            modi. Porro, odio, sed veniam hic numquam qui ad molestiae sint
            placeat expedita? Perferendis, enim qui numquam sequi obcaecati
            molestiae fugiat!
          </p>
          <p>
            Aperiam, odit, quasi, voluptate fugiat quisquam velit magni
            provident corporis animi facilis illo eveniet eum obcaecati adipisci
            blanditiis quas labore doloribus eos veniam repudiandae suscipit
            tempora ad harum odio eius distinctio hic deleniti. Sunt fuga ad
            perspiciatis repellat deleniti omnis!
          </p>

          <h3>Numquam, ut iure quia facere totam quas odit illo incidunt</h3>
          <p>
            Est, maiores, fuga sed nemo qui veritatis ducimus placeat odit
            quisquam dolorum. Rem, sunt, praesentium veniam maiores quia
            molestias eos fugit eaque ducimus veritatis provident assumenda.
            Quia, fuga, voluptates voluptatibus quis enim nam asperiores aliquam
            dignissimos ullam recusandae debitis iste.
          </p>
          <p>
            Dignissimos, beatae, praesentium illum eos autem perspiciatis?
            Minus, non, tempore, illo, mollitia exercitationem tempora quas
            harum odio dolores delectus quidem laudantium adipisci ducimus ullam
            placeat eaque minima quae iure itaque corporis magni nesciunt eius
            sed dolor doloremque id quasi nisi.
          </p>
        </article>
        {/* <!-- /Article --> */}
      </div>
    </div>
  )
}

export default SideBarLeft
