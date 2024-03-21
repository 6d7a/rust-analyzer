(function() {var type_impls = {
"syntax":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: Language,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new_root\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new_root</a>(green: <a class=\"struct\" href=\"syntax/struct.GreenNode.html\" title=\"struct syntax::GreenNode\">GreenNode</a>) -&gt; SyntaxNode&lt;L&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.replace_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">replace_with</a>(&amp;self, replacement: <a class=\"struct\" href=\"syntax/struct.GreenNode.html\" title=\"struct syntax::GreenNode\">GreenNode</a>) -&gt; <a class=\"struct\" href=\"syntax/struct.GreenNode.html\" title=\"struct syntax::GreenNode\">GreenNode</a></h4></section></summary><div class=\"docblock\"><p>Returns a green tree, equal to the green tree this node\nbelongs two, except with this node substitute. The complexity\nof operation is proportional to the depth of the tree</p>\n</div></details><section id=\"method.kind\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">kind</a>(&amp;self) -&gt; &lt;L as Language&gt;::Kind</h4></section><section id=\"method.text_range\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">text_range</a>(&amp;self) -&gt; <a class=\"struct\" href=\"syntax/struct.TextRange.html\" title=\"struct syntax::TextRange\">TextRange</a></h4></section><section id=\"method.index\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.text\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">text</a>(&amp;self) -&gt; <a class=\"struct\" href=\"syntax/struct.SyntaxText.html\" title=\"struct syntax::SyntaxText\">SyntaxText</a></h4></section><section id=\"method.green\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">green</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, GreenNodeData&gt;</h4></section><section id=\"method.parent\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">parent</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.ancestors\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">ancestors</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.children\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">children</a>(&amp;self) -&gt; SyntaxNodeChildren&lt;L&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"SyntaxNodeChildren&lt;L&gt;\">ⓘ</a></h4></section><section id=\"method.children_with_tokens\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">children_with_tokens</a>(&amp;self) -&gt; SyntaxElementChildren&lt;L&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"SyntaxElementChildren&lt;L&gt;\">ⓘ</a></h4></section><section id=\"method.first_child\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">first_child</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.last_child\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">last_child</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.first_child_or_token\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">first_child_or_token</a>(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;</h4></section><section id=\"method.last_child_or_token\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">last_child_or_token</a>(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;</h4></section><section id=\"method.next_sibling\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">next_sibling</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.prev_sibling\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">prev_sibling</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.next_sibling_or_token\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">next_sibling_or_token</a>(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;</h4></section><section id=\"method.prev_sibling_or_token\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">prev_sibling_or_token</a>(\n    &amp;self\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.first_token\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">first_token</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxToken&lt;L&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the leftmost token in the subtree of this node.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.last_token\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">last_token</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;SyntaxToken&lt;L&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the rightmost token in the subtree of this node.</p>\n</div></details><section id=\"method.siblings\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">siblings</a>(\n    &amp;self,\n    direction: <a class=\"enum\" href=\"syntax/enum.Direction.html\" title=\"enum syntax::Direction\">Direction</a>\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.siblings_with_tokens\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">siblings_with_tokens</a>(\n    &amp;self,\n    direction: <a class=\"enum\" href=\"syntax/enum.Direction.html\" title=\"enum syntax::Direction\">Direction</a>\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;</h4></section><section id=\"method.descendants\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">descendants</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = SyntaxNode&lt;L&gt;&gt;</h4></section><section id=\"method.descendants_with_tokens\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">descendants_with_tokens</a>(\n    &amp;self\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.preorder\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">preorder</a>(&amp;self) -&gt; <a class=\"struct\" href=\"syntax/struct.Preorder.html\" title=\"struct syntax::Preorder\">Preorder</a>&lt;L&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Preorder&lt;L&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Traverse the subtree rooted at the current node (including the current\nnode) in preorder, excluding tokens.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.preorder_with_tokens\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">preorder_with_tokens</a>(&amp;self) -&gt; PreorderWithTokens&lt;L&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"PreorderWithTokens&lt;L&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Traverse the subtree rooted at the current node (including the current\nnode) in preorder, including tokens.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.token_at_offset\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">token_at_offset</a>(&amp;self, offset: <a class=\"struct\" href=\"syntax/struct.TextSize.html\" title=\"struct syntax::TextSize\">TextSize</a>) -&gt; <a class=\"enum\" href=\"syntax/enum.TokenAtOffset.html\" title=\"enum syntax::TokenAtOffset\">TokenAtOffset</a>&lt;SyntaxToken&lt;L&gt;&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"TokenAtOffset&lt;SyntaxToken&lt;L&gt;&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Find a token in the subtree corresponding to this node, which covers the offset.\nPrecondition: offset must be withing node’s range.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.covering_element\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">covering_element</a>(\n    &amp;self,\n    range: <a class=\"struct\" href=\"syntax/struct.TextRange.html\" title=\"struct syntax::TextRange\">TextRange</a>\n) -&gt; <a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the deepest node or token in the current subtree that fully\ncontains the range. If the range is empty and is contained in two leaf\nnodes, either one can be returned. Precondition: range must be contained\nwithing the current node</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.child_or_token_at_range\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">child_or_token_at_range</a>(\n    &amp;self,\n    range: <a class=\"struct\" href=\"syntax/struct.TextRange.html\" title=\"struct syntax::TextRange\">TextRange</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Finds a [<code>SyntaxElement</code>] which intersects with a given <code>range</code>. If\nthere are several intersecting elements, any one can be returned.</p>\n<p>The method uses binary search internally, so it’s complexity is\n<code>O(log(N))</code> where <code>N = self.children_with_tokens().count()</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_subtree\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">clone_subtree</a>(&amp;self) -&gt; SyntaxNode&lt;L&gt;</h4></section></summary><div class=\"docblock\"><p>Returns an independent copy of the subtree rooted at this node.</p>\n<p>The parent of the returned node will be <code>None</code>, the start offset will be\nzero, but, otherwise, it’ll be equivalent to the source node.</p>\n</div></details><section id=\"method.clone_for_update\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">clone_for_update</a>(&amp;self) -&gt; SyntaxNode&lt;L&gt;</h4></section><section id=\"method.detach\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">detach</a>(&amp;self)</h4></section><section id=\"method.splice_children\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">splice_children</a>(\n    &amp;self,\n    to_delete: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;,\n    to_insert: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"syntax/enum.NodeOrToken.html\" title=\"enum syntax::NodeOrToken\">NodeOrToken</a>&lt;SyntaxNode&lt;L&gt;, SyntaxToken&lt;L&gt;&gt;&gt;\n)</h4></section></div></details>",0,"syntax::syntax_node::SyntaxNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-Hash-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + Language,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","syntax::syntax_node::SyntaxNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CSyntaxNode%3E-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-From%3CSyntaxNode%3E-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SyntaxNode&gt; for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: Language,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(raw: SyntaxNode) -&gt; SyntaxNode&lt;L&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<SyntaxNode>","syntax::syntax_node::SyntaxNode"],["<section id=\"impl-StructuralPartialEq-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: Language,</div></h3></section>","StructuralPartialEq","syntax::syntax_node::SyntaxNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-Debug-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: Language,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","syntax::syntax_node::SyntaxNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-Display-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: Language,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","syntax::syntax_node::SyntaxNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Language,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;SyntaxNode&lt;L&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","syntax::syntax_node::SyntaxNode"],["<section id=\"impl-Eq-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-Eq-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Language,</div></h3></section>","Eq","syntax::syntax_node::SyntaxNode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SyntaxNode%3CL%3E\" class=\"impl\"><a href=\"#impl-Clone-for-SyntaxNode%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for SyntaxNode&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Language,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; SyntaxNode&lt;L&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","syntax::syntax_node::SyntaxNode"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()