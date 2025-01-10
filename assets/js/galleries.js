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
    { src: "7311", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7337", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7343", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7364", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7384", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7387", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7393", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7463", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7474", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7495", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7509", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" },
    { src: "7529", subHtml: "Bước đi với bàn tay của bạn trong tay tôi và bàn tay của tôi trong tay bạn, đó chính xác là nơi tôi muốn luôn ở đó" }
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
