# SOLID
Repositório para a atividade de Engenharia de Software

### SRP (Single Responsibility Principle)

Este princípio afirma que uma classe deve ter apenas uma única resposabilidade dentro do sistema.

#### [Violação:](https://github.com/RafaelaTieri/SOLID/blob/main/SRP/viola_srp.js)

Neste código a classe `UserManagement` assume mai de uma responsabilidade. Se houver alguma alteração a forma em que os usuários são manipulados, isso afetaria a classe.
O mesmo aconteceria caso a forma como os usuários são persistidos no banco de dados mudasse.

Para resolver isso, precisamos dividir as responsabilidades de manipulação e persistencia de dados em classes separadas.

#### [Solução:](https://github.com/RafaelaTieri/SOLID/blob/main/SRP/respeita_srp.js)

### OCP (Open-Closed Principle)

Este princípio afirma que classes, funções, módulos, etc, devem ser abertos para extensão mas fechados para modificações.

#### [Violação:](https://github.com/RafaelaTieri/SOLID/blob/main/OCP/viola_ocp.js)

Neste código a função `calculateTotal` calcula os impostos para diferentes tipos de itens, ou seja, qualquer alteração nos tipos de itens exigirá uma modificação diretamente na função.

Para resolvermos isso, criamos `tazCalculator` que mapeia os tipos de itens para funções que calculam o imposto para cada tipo.
Assim, se quisermos adicionar um novo item, temos que apenas estender este ojeto, sem alterar a função.

#### [Solução:](https://github.com/RafaelaTieri/SOLID/blob/main/OCP/respeita_ocp.js)

### ISP (Interface Segregation Principle)

Este princípio afirma que uma classe não deve ser forçada a depender de interfaces que elas não use.

#### [Violação:](https://github.com/RafaelaTieri/SOLID/blob/main/ISP/viola_isp.js)

Aqui a classe `Animal` possui o método `fly()` que é aplicável para certos tipos de animais, porém, como `Animal` é uma classe genérica para qualquer tipo de animal, isso significa que até animais que não voam herdarão esse método, como por exemplo `Dog`.

Para corrigir isso, devemos dividir a interface em interfaces mais específicas com seus cojuntos coesos de métodos.
Como podemos ver em `Flyable`, no código solução:

#### [Solução:](https://github.com/RafaelaTieri/SOLID/blob/main/ISP/respeita_isp.js)

### Lei de Demeter

Este princípio afirma que uma classe deve ter conhecimento limitado sobre as estruturas internas de outras classes. 
Em vez de interagir diretamente com objetos relacionados, uma classe deve interagir apenas com seus próprios membros ou membros de objetos passados diretamente para ela

#### [Violação:](https://github.com/RafaelaTieri/SOLID/blob/main/Demeter/viola_demeter.js)

Neste código, `Pessoa` possui uma instancia de classe `Animal` como um membro `(this.animal)`.
Quando a função `andarAnimal` é chamada em uma instância de pessoa, ela chama diretamente o método `andar()` da instância de `Animal`, `(this.animal.andar())`.
Isso viola o princípio de Demeter pois a classe `Pessoa` não tem conhecimento interno sobre `Animal`.

Para arrumarmos isso, `Pessoa` deveria receber uma instância de `Animal` como argumento no costrutor. Assim ela pode interagir por meio de uma interface pública `andar()` ao ivés de acessar diretamente suas propriedades internas.

#### [Solução:](https://github.com/RafaelaTieri/SOLID/blob/main/Demeter/respeita_demeter.js)