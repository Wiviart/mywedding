// Initialize the photoGalleries array
var photoGalleries = [];

// Array containing all photo data
const photos = [
    { src: "4977", subHtml: "Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn" },
    { src: "4988", subHtml: "Vì vậy, để được ai đó nhìn thấy đầy đủ và được yêu mến dù thế nào đi nữa — đây là một sự dâng hiến của con người có thể là điều kỳ diệu" },
    { src: "5055", subHtml: "Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá" },
    { src: "6024", subHtml: "Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng" },
    { src: "6048", subHtml: "Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh" },
    { src: "6058", subHtml: "Tôi có thể chinh phục thế giới bằng một tay miễn là bạn đang nắm tay kia" },
    { src: "6060", subHtml: "Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ" },
    { src: "7272", subHtml: "Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí" },
    { src: "7283", subHtml: "Đối với thế giới, bạn có thể là một người, nhưng với một người, bạn là cả thế giới" },
    { src: "7300", subHtml: "Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu" },
    { src: "7311", subHtml: "Bạn là lý do khiến mỗi ngày của tôi trở nên đáng nhớ và mỗi đêm của tôi trở nên đáng mơ ước" },
    { src: "7337", subHtml: "Trong ánh mắt bạn, tôi tìm thấy ngôi nhà của mình, trong trái tim bạn, tôi tìm thấy thế giới của mình" },
    { src: "7343", subHtml: "Bạn là ngôi sao sáng nhất trên bầu trời đêm của tôi, là ánh sáng dẫn lối cho tôi qua những ngày đen tối nhất" },
    { src: "7364", subHtml: "Tình yêu của bạn là phép màu đã biến cuộc sống bình thường của tôi thành một câu chuyện cổ tích" },
    { src: "7384", subHtml: "Mỗi khoảnh khắc bên bạn là một kho báu, và tôi không thể tưởng tượng cuộc sống thiếu bạn" },
    { src: "7387", subHtml: "Tình yêu của chúng ta như một giai điệu, nhẹ nhàng mà sâu lắng, không bao giờ phai mờ" },
    { src: "7393", subHtml: "Bạn không chỉ là người tôi yêu, bạn là giấc mơ mà tôi không bao giờ muốn thức dậy" },
    { src: "7463", subHtml: "Khi bạn nắm lấy tay tôi, cả thế giới như ngừng lại và chỉ còn chúng ta" },
    { src: "7474", subHtml: "Tôi không cần gì ngoài bạn, bởi bạn đã là tất cả những gì tôi tìm kiếm" },
    { src: "7495", subHtml: "Nếu tình yêu là ngọn lửa, bạn chính là ngọn lửa cháy sáng nhất trong trái tim tôi" },
    { src: "7509", subHtml: "Tôi không biết định mệnh là gì, nhưng tôi biết định mệnh đã mang bạn đến bên tôi" },
    { src: "7529", subHtml: "Bạn không chỉ là một phần của cuộc đời tôi, bạn là cả cuộc đời của tôi" }
];

// Populate photoGalleries using the photos array
photos.forEach(photo => {
    photoGalleries.push({
        src: `./assets/imgs/${photo.src}.jpg`,
        thumb: `./assets/imgs/${photo.src}.jpg`,
        subHtml: `<div class="lg-sub-html"><h4>${photo.subHtml}</h4></div>`
    });
});

// Optionally, log the photoGalleries array to the console
// console.log(photoGalleries);
