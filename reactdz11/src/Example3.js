export default function Example3() {
  return (
    <div className="container mx-auto d-flex">

      <div className="card" style={{width: '25%', height: '400px'}}>
        <div
          className="card-img-top preview"
          style={{ backgroundImage: "url('main.jpg')", height:'250px' }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">Кривой Рог</h5>
          <h6 className="card-title">Украина</h6>
          <p className="card-text">
            Дата основания: 24 августа 1991 г.
          </p>
        </div>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
        style={{width: '75%'}}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#h" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="d-block w-100 preview"
              style={{ backgroundImage: "url('1.jpg')" }}
            ></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Криворожский Ботанический сад</h5>
              <p>ул. Самуила Маршака, 50, Кривой Рог 50000 Украина</p>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100 preview"
              style={{ backgroundImage: "url('2.jpg')" }}
            ></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Парк им.Газеты Правда</h5>
              <p>ул. Заречная, 1 A, Кривой Рог Украина</p>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100 preview"
              style={{ backgroundImage: "url('3.jpg')" }}
            ></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Спасо-Преображенский кафедральный собор</h5>
              <p>Ул. Соборная 1, Кривой Рог 50000 Украина</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
