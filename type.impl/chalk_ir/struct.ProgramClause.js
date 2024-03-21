(function() {var type_impls = {
"hir_ty":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(interner: I, clause: ProgramClauseData&lt;I&gt;) -&gt; ProgramClause&lt;I&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new program clause using <code>ProgramClauseData</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_from_env_clause\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_from_env_clause</a>(self, interner: I) -&gt; ProgramClause&lt;I&gt;</h4></section></summary><div class=\"docblock\"><p>Change the clause into a <code>FromEnv</code> clause.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.interned\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">interned</a>(&amp;self) -&gt; &amp;&lt;I as Interner&gt;::InternedProgramClause</h4></section></summary><div class=\"docblock\"><p>Get the interned program clause.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.data\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">data</a>(&amp;self, interner: I) -&gt; &amp;ProgramClauseData&lt;I&gt;</h4></section></summary><div class=\"docblock\"><p>Get the program clause data.</p>\n</div></details></div></details>",0,"hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-Hash-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + Interner,\n    &lt;I as Interner&gt;::InternedProgramClause: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-Ord-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + Interner,\n    &lt;I as Interner&gt;::InternedProgramClause: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;ProgramClause&lt;I&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#830-832\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#850-852\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#875-878\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeSuperFoldable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeSuperFoldable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; TypeSuperFoldable&lt;I&gt; for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_super_fold_with\" class=\"method trait-impl\"><a href=\"#method.try_super_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_super_fold_with</a>&lt;E&gt;(\n    self,\n    folder: &amp;mut dyn FallibleTypeFolder&lt;I, Error = E&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ProgramClause&lt;I&gt;, E&gt;</h4></section></summary><div class='docblock'>Recursively folds the value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.super_fold_with\" class=\"method trait-impl\"><a href=\"#method.super_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">super_fold_with</a>(\n    self,\n    folder: &amp;mut dyn TypeFolder&lt;I, Error = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_super_fold_with</code> for use with\ninfallible folders. Do not override this method, to ensure coherence\nwith <code>try_super_fold_with</code>.</div></details></div></details>","TypeSuperFoldable<I>","hir_ty::ProgramClause"],["<section id=\"impl-StructuralPartialEq-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section>","StructuralPartialEq","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeSuperVisitable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeSuperVisitable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; TypeSuperVisitable&lt;I&gt; for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.super_visit_with\" class=\"method trait-impl\"><a href=\"#method.super_visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">super_visit_with</a>&lt;B&gt;(\n    &amp;self,\n    visitor: &amp;mut dyn TypeVisitor&lt;I, BreakTy = B&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/control_flow/enum.ControlFlow.html\" title=\"enum core::ops::control_flow::ControlFlow\">ControlFlow</a>&lt;B&gt;</h4></section></summary><div class='docblock'>Recursively visits the type contents.</div></details></div></details>","TypeSuperVisitable<I>","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasInterner-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-HasInterner-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; HasInterner for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Interner\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Interner\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Interner</a> = I</h4></section></summary><div class='docblock'>The interner associated with the type.</div></details></div></details>","HasInterner","hir_ty::ProgramClause"],["<section id=\"impl-Copy-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-Copy-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + Interner,\n    &lt;I as Interner&gt;::InternedProgramClause: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-PartialOrd-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + Interner,\n    &lt;I as Interner&gt;::InternedProgramClause: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;ProgramClause&lt;I&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1127\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1144\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1160\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1177\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeFoldable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeFoldable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; TypeFoldable&lt;I&gt; for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"docblock\"><p>Folding a program clause invokes the <code>fold_program_clause</code>\ncallback on the folder (which will, by default, invoke the\n<code>super_fold_with</code> method on the program clause).</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_fold_with\" class=\"method trait-impl\"><a href=\"#method.try_fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">try_fold_with</a>&lt;E&gt;(\n    self,\n    folder: &amp;mut dyn FallibleTypeFolder&lt;I, Error = E&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ProgramClause&lt;I&gt;, E&gt;</h4></section></summary><div class='docblock'>Apply the given folder <code>folder</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nfolder. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fold_with\" class=\"method trait-impl\"><a href=\"#method.fold_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fold_with</a>(\n    self,\n    folder: &amp;mut dyn TypeFolder&lt;I, Error = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>A convenient alternative to <code>try_fold_with</code> for use with infallible\nfolders. Do not override this method, to ensure coherence with\n<code>try_fold_with</code>.</div></details></div></details>","TypeFoldable<I>","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CastTo%3CProgramClause%3CI%3E%3E-for-T\" class=\"impl\"><a href=\"#impl-CastTo%3CProgramClause%3CI%3E%3E-for-T\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; CastTo&lt;ProgramClause&lt;I&gt;&gt; for T<div class=\"where\">where\n    T: CastTo&lt;DomainGoal&lt;I&gt;&gt;,\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast_to\" class=\"method trait-impl\"><a href=\"#method.cast_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cast_to</a>(self, interner: I) -&gt; ProgramClause&lt;I&gt;</h4></section></summary><div class='docblock'>Cast a value to type <code>T</code>.</div></details></div></details>","CastTo<ProgramClause<I>>","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CastTo%3CProgramClause%3CI%3E%3E-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-CastTo%3CProgramClause%3CI%3E%3E-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; CastTo&lt;ProgramClause&lt;I&gt;&gt; for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast_to\" class=\"method trait-impl\"><a href=\"#method.cast_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">cast_to</a>(\n    self,\n    _interner: &lt;ProgramClause&lt;I&gt; as HasInterner&gt;::Interner\n) -&gt; ProgramClause&lt;I&gt;</h4></section></summary><div class='docblock'>Cast a value to type <code>T</code>.</div></details></div></details>","CastTo<ProgramClause<I>>","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zip%3CI%3E-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-Zip%3CI%3E-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; Zip&lt;I&gt; for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zip_with\" class=\"method trait-impl\"><a href=\"#method.zip_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zip_with</a>&lt;Z&gt;(\n    zipper: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut Z</a>,\n    variance: Variance,\n    a: &amp;ProgramClause&lt;I&gt;,\n    b: &amp;ProgramClause&lt;I&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, NoSolution&gt;<div class=\"where\">where\n    Z: Zipper&lt;I&gt;,</div></h4></section></summary><div class='docblock'>Uses the zipper to walk through two values, ensuring that they match.</div></details></div></details>","Zip<I>","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CouldMatch%3CDomainGoal%3CI%3E%3E-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-CouldMatch%3CDomainGoal%3CI%3E%3E-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; CouldMatch&lt;DomainGoal&lt;I&gt;&gt; for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.could_match\" class=\"method trait-impl\"><a href=\"#method.could_match\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">could_match</a>(\n    &amp;self,\n    interner: I,\n    db: &amp;dyn UnificationDatabase&lt;I&gt;,\n    other: &amp;DomainGoal&lt;I&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Checks whether <code>self</code> and <code>other</code> could possibly match.</div></details></div></details>","CouldMatch<DomainGoal<I>>","hir_ty::ProgramClause"],["<section id=\"impl-Eq-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-Eq-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Interner,\n    &lt;I as Interner&gt;::InternedProgramClause: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Interner,\n    &lt;I as Interner&gt;::InternedProgramClause: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;ProgramClause&lt;I&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Interner,\n    &lt;I as Interner&gt;::InternedProgramClause: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; ProgramClause&lt;I&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_ty::ProgramClause"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeVisitable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"impl\"><a href=\"#impl-TypeVisitable%3CI%3E-for-ProgramClause%3CI%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I&gt; TypeVisitable&lt;I&gt; for ProgramClause&lt;I&gt;<div class=\"where\">where\n    I: Interner,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.visit_with\" class=\"method trait-impl\"><a href=\"#method.visit_with\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">visit_with</a>&lt;B&gt;(\n    &amp;self,\n    visitor: &amp;mut dyn TypeVisitor&lt;I, BreakTy = B&gt;,\n    outer_binder: <a class=\"struct\" href=\"hir_ty/struct.DebruijnIndex.html\" title=\"struct hir_ty::DebruijnIndex\">DebruijnIndex</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/control_flow/enum.ControlFlow.html\" title=\"enum core::ops::control_flow::ControlFlow\">ControlFlow</a>&lt;B&gt;</h4></section></summary><div class='docblock'>Apply the given visitor <code>visitor</code> to <code>self</code>; <code>binders</code> is the\nnumber of binders that are in scope when beginning the\nvisitor. Typically <code>binders</code> starts as 0, but is adjusted when\nwe encounter <code>Binders&lt;T&gt;</code> in the IR or other similar\nconstructs.</div></details></div></details>","TypeVisitable<I>","hir_ty::ProgramClause"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()