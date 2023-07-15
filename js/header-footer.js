document.querySelector('header').innerHTML = `
`;
document.querySelector('footer').innerHTML = `
  <div class="footer-style">
    <ul>
      <li>
        <a href="">お問い合わせ</a>
      </li>
      <p class="stick">&#160;|&#160;</p>
      <li>-
        <a href="">プライバシーポリシー</a>
      </li>
      <p class="stick">&#160;|&#160;</p>
      <li>
        <a href="">利用規約</a>
      </li>
    </ul>
        <div class="footer-border"></div>
    <div class="footer-copy">
      <p>&copy;&#160;<div id="year"></div>&#160;<div>LIBERTIA</div></p>
    </div>
  </div>
`;

date = new Date();
year = date.getFullYear();
document.getElementById("year").innerHTML = year;
