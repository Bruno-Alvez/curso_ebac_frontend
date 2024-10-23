"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var Aluno = /*#__PURE__*/_createClass(function Aluno(nomeDoAluno, notaDoAluno) {
  _classCallCheck(this, Aluno);
  this.nome = nomeDoAluno;
  this.nota = notaDoAluno;
});
var listaDosAlunos = [new Aluno("Ana", 10), new Aluno("Lucas", 4.5), new Aluno("Carla", 5.5), new Aluno("Bruno", 7.5), new Aluno("Matias", 5), new Aluno("Pedro", 8.8)];
function alunosAprovados(listaDosAlunos) {
  return listaDosAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(listaDosAlunos);
console.log(aprovados);