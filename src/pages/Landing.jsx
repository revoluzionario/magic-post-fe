import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Form, Image, Row, Col } from 'react-bootstrap';
import TestimonalCard from '@/components/landing/TestimonalCard';
import FeatureCard from '@/components/landing/FeatureCard';
import AppNavbar from '@/components/Navbar';

export default function LandingPage() {
  const navigate = useNavigate();
  function preventSubmit(event) {
    event.preventDefault();
    console.log('prevent submit');
    navigate('/ordertracking', {
      state: {
        orderCode: event.target[0].value
      }
    });
  }

  const featureData = [
    {
      title: "Chuyển hàng đến bất kỳ đâu trên toàn quốc",
      content: "Với mạng lưới các điểm giao dịch và điểm tập kết hàng khắp cả nước, đơn hàng của bạn sẽ được đảm bảo chuyển đến đúng người nhận, nhanh, và đảm bảo."
    },
    {
      title: "Theo dõi tình trạng đơn hàng",
      content: "Khách hàng có thể tra cứu tình trạng đơn hàng tại đây."
    },
    {
      title: "Giá cả hợp lý",
      content: "Sứ mệnh của chúng tôi là cung cấp dịch vụ vận chuyển đa dạng, phù hợp với nhu cầu của từng khách hàng với giá cả hợp lý."
    }
  ]

  const testimonalData = [
    {
      name: "Jane Doe",
      content: "Nhờ MagicPost mà tôi đã được cầm trên tay iPhone 30 ngay khi nó vừa ra mắt chưa đầy bao lâu! Dịch vụ vận chuyển nhanh, an toàn và đặc biệt chiếc điện thoại của tôi không có vấn đề gì!",
      role: "Kỹ sư phần mềm, Apple con",
      image: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&ixlib=rb-1.2.1&h=1200"
    },
    {
      name: "Doraemon",
      content: "Dịch vụ vận chuyển của MagicPost chính là mô hình tuyệt vời, đã tạo nền tảng cho cuộc cách mạng trong ngành logistics của thế kỷ 22!",
      role: "Robot",
      image: "https://data.voz.vn/avatars/o/1860/1860210.jpg"
    },
    {
      name: "Giáo sư Albus P.W.B Dumbledore",
      content: "MagicPost quả là tuyệt vời! Sau khi chuyển phương thức gửi thư nhập học từ dùng cú sang dùng dịch vụ của MagicPost, và chúng tôi đánh giá phương thức này bảo mật, an toàn và còn nhanh hơn cả chúng tôi dùng phép độn thổ nữa.  Đúng là MagicPost!",
      role: "Hiệu trưởng trường Hogwarts",
      image: "https://pointrussell.opencities.com/files/content/public/v/5/council/elected-members/albus-dumbledore/albus-dumbledore.jpg?w=1200"
    }
  ]

  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document.getElementById(lastHash.current)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
      // remove hash
      history.replaceState(null, '', location.pathname);
    }
  }, [location]);

  return (
    <Container className="bg-body-tertiary" fluid>
      <AppNavbar />
      <Container style={{ backgroundImage: `url("https://www.brookings.edu/wp-content/uploads/2020/08/shutterstock_360666773.jpg?resize=1500,799")`, height: "450px" }} className='mt-5' id='ordertracking'>
        <div className='text-center text-white' style={{ paddingTop: "80px" }}>
          <h1 className='font-weight-bold'>MAGICPOST</h1>
          <br></br>
          <Form className='d-flex align-items-center justify-content-center my-auto' onSubmit={preventSubmit}>
            <Form.Control className='w-75 h-10 py-3' type="text" placeholder="Nhập mã vận đơn" />
          </Form>
        </div>
      </Container>
      <Container className='d-flex justify-content-between flex-column flex-md-row my-5 bg-white py-5'>
        <div className='d-flex flex-column justify-content-center align-self-center pb-5 flex-grow-1'>
          <h2>Về MagicPost</h2>
          <span className='' style={{ maxWidth: '90%' }}>
            MagicPost là công ty hoạt động trong lĩnh vực chuyển phát. Công ty của chúng tôi có các điểm giao dịch và các kho tập kết phủ khắp cả nước, thích hợp để đáp ứng với nhu cầu vận chuyển ngày càng tăng lên của cuộc sống hiện đại.
          </span>
        </div>
        <Image src="https://pbs.twimg.com/media/EWhl6sZWoAEgDZ_.jpg" style={{ height: "320px", width: "320px" }} roundedCircle />
      </Container>
      <Container className='w-100 py-3' id='service'>
        <Container className='d-flex flex-column mx-auto py-5'>
          <h2 className='text-center'>Các dịch vụ vận chuyển</h2>
          <span className='text-center'>Vận chuyển đơn hàng đến bất cứ nơi nào</span>
        </Container>
        <Container className='mx-auto'>
          <Row xs={1} sm={1} md={2} lg={3}>
            {featureData.map((feature, index) => (
              <Col key={index} className='my-2'>
                <FeatureCard title={feature.title} content={feature.content} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Container className='w-100 my-5 bg-secondary-subtle'>
        <Container className='d-flex flex-column mx-auto py-5'>
          <h2 className='text-center'>Vận chuyển bảo đảm và nhanh chóng</h2>
          <span className='text-center'>Những gì mà khách hàng nói về chúng tôi</span>
        </Container>
        <Container className='mx-auto pb-5'>
          <Row xs={1} sm={1} md={1} lg={3} className='mx-lg-5'>
            {testimonalData.map((t, index) => (
              <Col key={index} className='my-2'>
                <TestimonalCard name={t.name} content={t.content} role={t.role} image={t.image} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Container>
        lafm sau, duma dau dau vl :v
      </Container>
    </Container>
  );
}