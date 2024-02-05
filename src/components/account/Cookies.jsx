import React from 'react'
import './cookies.\css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Cookies = () => {
  return (
    <>
    <div className="background">
        <div className="container">
            <div className="cookies">
                <h1>Cookies</h1>
                <p>- Đôi khi chúng tôi có thể sử dụng "cookie" hoặc các tính năng khác để cho phép chúng tôi 
                    hoặc các bên thứ ba thu thập hoặc chia sẻ thông tin sẽ giúp chúng tôi cải thiện Nền tảng của mình và 
                    Các Dịch Vụ chúng tôi cung cấp, hoặc giúp chúng tôi đưa ra các dịch vụ và tính năng mới.</p><br />
                <p>- "Cookie" là các mã danh định chúng tôi gửi đến máy tính hoặc thiết bị di động của bạn,
                     cho phép chúng tôi nhận dạng máy tính hoặc thiết bị của bạn và cho chúng tôi biết khi nào 
                     Các Dịch Vụ hoặc Nền tảng được sử dụng hay truy cập, bởi bao nhiêu người và để theo dõi những hoạt động trong
                      Các Nền tảng của chúng tôi. Chúng tôi có thể liên kết thông tin cookie với dữ liệu cá nhân.
                      Cookie cũng liên kết với thông tin về những nội dung bạn đã chọn đối với các trang mua sắm bạn đã xem, hoặc các game bạn đã chơi. 
                     Thông tin này được sử dụng để ví dụ như theo dõi giỏ hàng.
                     Cookie cũng được sử dụng để cung cấp nội dung dựa trên quan tâm của bạn và để theo dõi việc sử dụng của các Dịch Vụ.</p>
                     <br />
                <p>- Bạn có thể từ chối sử dụng cookie bằng cách chọn các thiết lập thích hợp trên trình duyệt của bạn. Tuy nhiên,
                     vui lòng lưu ý rằng nếu bạn thực hiện thao tác này bạn có thể không sử dụng được các chức năng đầy đủ của 
                     Nền tảng hoặc Các Dịch Vụ của chúng tôi.</p>
                     <br />

                <button>
                    <Link to='/login'>
                     <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Cookies