(function($) {
  $(document).ready(function () {
    var makePhoneLinks = function () {
      var tNodes = [];
      // +36 30 123 4567
      getTextNodes(document.body, false, tNodes, /(\+36 \d{2} \d{3} \d{4})/ig);
      var l = tNodes.length;
      while (l--) {
        wrapNode(tNodes[l], /(\+36 \d{2} \d{3} \d{4})/ig, "<a href='tel:$1' target='_blank' class='wp-clickable-phone-numbers'>$1</a>");
      }
    }

    function getTextNodes(node, includeWhitespaceNodes, textNodes, match) {

      if (node.nodeType == 3) {
        if (includeWhitespaceNodes || !/^\s*$/.test(node.nodeValue)) {
          if (match) {
            if (match.test(node.nodeValue))
              textNodes.push(node);
          }
          else {
            textNodes.push(node);
          }
        }
      } else {
        for (var i = 0, len = node.childNodes.length; i < len; ++i) {
          getTextNodes(node.childNodes[i], includeWhitespaceNodes, textNodes, match);
        }
      }
    }

    function wrapNode(n, match, m) {
      var temp = document.createElement('div');
      if (n.data)
        temp.innerHTML = n.data.replace(match, m);
      //else {
        //whatever
      //}
      while (temp.firstChild) {
        n.parentNode.insertBefore(temp.firstChild, n);
      }
      n.parentNode.removeChild(n);
    }
    makePhoneLinks();
  });
})( jQuery );
